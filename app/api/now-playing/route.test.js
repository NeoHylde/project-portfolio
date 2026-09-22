import { test, describe, afterEach } from "node:test";
import assert from "node:assert/strict";
import { GET } from "./route.js";

describe("GET /api/now-playing", () => {
  const originalFetch = globalThis.fetch;
  const originalApiKey = process.env.LASTFM_API_KEY;
  const originalUsername = process.env.LASTFM_USERNAME;

  afterEach(() => {
    globalThis.fetch = originalFetch;
    process.env.LASTFM_API_KEY = originalApiKey;
    process.env.LASTFM_USERNAME = originalUsername;
  });

  test("returns an empty track list when credentials are missing", async () => {
    delete process.env.LASTFM_API_KEY;
    delete process.env.LASTFM_USERNAME;

    const res = await GET();
    const body = await res.json();

    assert.deepEqual(body, { tracks: [] });
  });

  test("returns an empty track list when the Last.fm API responds with an error", async () => {
    process.env.LASTFM_API_KEY = "key";
    process.env.LASTFM_USERNAME = "user";
    globalThis.fetch = async () => ({ ok: false });

    const res = await GET();
    const body = await res.json();

    assert.deepEqual(body, { tracks: [] });
  });

  test("returns an empty track list when there are no recent tracks", async () => {
    process.env.LASTFM_API_KEY = "key";
    process.env.LASTFM_USERNAME = "user";
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => ({ recenttracks: { track: [] } }),
    });

    const res = await GET();
    const body = await res.json();

    assert.deepEqual(body, { tracks: [] });
  });

  test("normalizes a single track object into a one-item list", async () => {
    process.env.LASTFM_API_KEY = "key";
    process.env.LASTFM_USERNAME = "user";
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => ({
        recenttracks: {
          track: {
            name: "Song",
            artist: { "#text": "Artist" },
            album: { "#text": "Album" },
            image: [{}, {}, { "#text": "https://example.com/image.jpg" }],
            "@attr": { nowplaying: "true" },
            url: "https://last.fm/track",
          },
        },
      }),
    });

    const res = await GET();
    const body = await res.json();

    assert.deepEqual(body, {
      tracks: [
        {
          name: "Song",
          artist: "Artist",
          album: "Album",
          image: "https://example.com/image.jpg",
          nowPlaying: true,
          url: "https://last.fm/track",
        },
      ],
    });
  });

  test("maps a list of tracks and defaults a missing image to null", async () => {
    process.env.LASTFM_API_KEY = "key";
    process.env.LASTFM_USERNAME = "user";
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => ({
        recenttracks: {
          track: [
            {
              name: "Song A",
              artist: { "#text": "Artist A" },
              album: { "#text": "Album A" },
              "@attr": { nowplaying: "false" },
              url: "https://last.fm/a",
            },
          ],
        },
      }),
    });

    const res = await GET();
    const body = await res.json();

    assert.equal(body.tracks.length, 1);
    assert.equal(body.tracks[0].image, null);
    assert.equal(body.tracks[0].nowPlaying, false);
  });
});
