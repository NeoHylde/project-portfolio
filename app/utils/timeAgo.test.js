import { test } from "node:test";
import assert from "node:assert/strict";
import { timeAgo } from "./timeAgo.js";

function isoSecondsAgo(seconds) {
  return new Date(Date.now() - seconds * 1000).toISOString();
}

test("timeAgo", async (t) => {
  await t.test('returns "just now" for less than a minute', () => {
    assert.equal(timeAgo(isoSecondsAgo(30)), "just now");
  });

  await t.test("returns singular minute", () => {
    assert.equal(timeAgo(isoSecondsAgo(60)), "1 minute ago");
  });

  await t.test("returns plural minutes", () => {
    assert.equal(timeAgo(isoSecondsAgo(120)), "2 minutes ago");
  });

  await t.test("returns singular hour", () => {
    assert.equal(timeAgo(isoSecondsAgo(3600)), "1 hour ago");
  });

  await t.test("returns plural hours", () => {
    assert.equal(timeAgo(isoSecondsAgo(3600 * 5)), "5 hours ago");
  });

  await t.test("returns singular day", () => {
    assert.equal(timeAgo(isoSecondsAgo(86400)), "1 day ago");
  });

  await t.test("returns plural days", () => {
    assert.equal(timeAgo(isoSecondsAgo(86400 * 3)), "3 days ago");
  });

  await t.test("returns singular month", () => {
    assert.equal(timeAgo(isoSecondsAgo(2592000)), "1 month ago");
  });

  await t.test("returns plural months", () => {
    assert.equal(timeAgo(isoSecondsAgo(2592000 * 4)), "4 months ago");
  });

  await t.test("returns singular year", () => {
    assert.equal(timeAgo(isoSecondsAgo(31536000)), "1 year ago");
  });

  await t.test("returns plural years", () => {
    assert.equal(timeAgo(isoSecondsAgo(31536000 * 2)), "2 years ago");
  });
});
