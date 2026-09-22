import { test, describe, afterEach } from "node:test";
import assert from "node:assert/strict";
import { GET } from "./route.js";

describe("GET /api/github", () => {
  const originalFetch = globalThis.fetch;
  const originalUsername = process.env.GITHUB_USERNAME;

  afterEach(() => {
    globalThis.fetch = originalFetch;
    process.env.GITHUB_USERNAME = originalUsername;
  });

  test("returns push: null when the GitHub API responds with an error", async () => {
    globalThis.fetch = async () => ({ ok: false });

    const res = await GET();
    const body = await res.json();

    assert.deepEqual(body, { push: null });
  });

  test("returns push: null when there is no PushEvent in the events list", async () => {
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => [{ type: "WatchEvent" }],
    });

    const res = await GET();
    const body = await res.json();

    assert.deepEqual(body, { push: null });
  });

  test("returns push: null when the events payload is not an array", async () => {
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => ({ message: "unexpected shape" }),
    });

    const res = await GET();
    const body = await res.json();

    assert.deepEqual(body, { push: null });
  });

  test("maps the most recent PushEvent into the expected shape", async () => {
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => [
        { type: "WatchEvent" },
        {
          type: "PushEvent",
          repo: { name: "NeoHylde/project-portfolio" },
          payload: {
            ref: "refs/heads/main",
            head: "abc123",
            commits: [{ message: "first" }, { message: "second commit" }],
          },
          created_at: "2026-01-01T00:00:00Z",
        },
      ],
    });

    const res = await GET();
    const body = await res.json();

    assert.deepEqual(body, {
      push: {
        repo: "NeoHylde/project-portfolio",
        branch: "main",
        message: "second commit",
        at: "2026-01-01T00:00:00Z",
        url: "https://github.com/NeoHylde/project-portfolio/commit/abc123",
      },
    });
  });

  test("defaults the commit message to an empty string when commits are missing", async () => {
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => [
        {
          type: "PushEvent",
          repo: { name: "NeoHylde/project-portfolio" },
          payload: { ref: "refs/heads/main", head: "abc123" },
          created_at: "2026-01-01T00:00:00Z",
        },
      ],
    });

    const res = await GET();
    const body = await res.json();

    assert.equal(body.push.message, "");
  });
});
