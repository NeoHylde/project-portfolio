import { test } from "node:test";
import assert from "node:assert/strict";
import { timeAgo } from "./timeAgo.js";

test("timeAgo utility", async (t) => {
  await t.test("returns 'just now' for times within the last minute", () => {
    const now = new Date();
    const fiveSecondsAgo = new Date(now.getTime() - 5000);
    const thirtySecondsAgo = new Date(now.getTime() - 30000);

    assert.equal(timeAgo(fiveSecondsAgo.toISOString()), "just now");
    assert.equal(timeAgo(thirtySecondsAgo.toISOString()), "just now");
    assert.equal(timeAgo(now.toISOString()), "just now");
  });

  await t.test("returns singular 'minute ago' for 1-2 minutes", () => {
    const now = new Date();
    const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
    const ninetySecondsAgo = new Date(now.getTime() - 90 * 1000);

    assert.equal(timeAgo(oneMinuteAgo.toISOString()), "1 minute ago");
    assert.equal(timeAgo(ninetySecondsAgo.toISOString()), "1 minute ago");
  });

  await t.test("returns plural 'minutes ago' for 2-59 minutes", () => {
    const now = new Date();
    const twoMinutesAgo = new Date(now.getTime() - 2 * 60 * 1000);
    const fiftyNineMinutesAgo = new Date(now.getTime() - 59 * 60 * 1000);

    assert.equal(timeAgo(twoMinutesAgo.toISOString()), "2 minutes ago");
    assert.equal(timeAgo(fiftyNineMinutesAgo.toISOString()), "59 minutes ago");
  });

  await t.test("returns singular 'hour ago' for 1-2 hours", () => {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    assert.equal(timeAgo(oneHourAgo.toISOString()), "1 hour ago");
  });

  await t.test("returns plural 'hours ago' for 2-23 hours", () => {
    const now = new Date();
    const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
    const twentyThreeHoursAgo = new Date(now.getTime() - 23 * 60 * 60 * 1000);

    assert.equal(timeAgo(twoHoursAgo.toISOString()), "2 hours ago");
    assert.equal(timeAgo(twentyThreeHoursAgo.toISOString()), "23 hours ago");
  });

  await t.test("returns singular 'day ago' for 1-2 days", () => {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    assert.equal(timeAgo(oneDayAgo.toISOString()), "1 day ago");
  });

  await t.test("returns plural 'days ago' for 2-29 days", () => {
    const now = new Date();
    const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
    const twentyNineDaysAgo = new Date(now.getTime() - 29 * 24 * 60 * 60 * 1000);

    assert.equal(timeAgo(twoDaysAgo.toISOString()), "2 days ago");
    assert.equal(timeAgo(twentyNineDaysAgo.toISOString()), "29 days ago");
  });

  await t.test("returns singular 'month ago' for 1-2 months", () => {
    const now = new Date();
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    assert.equal(timeAgo(oneMonthAgo.toISOString()), "1 month ago");
  });

  await t.test("returns plural 'months ago' for 2-11 months", () => {
    const now = new Date();
    const twoMonthsAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
    const elevenMonthsAgo = new Date(now.getTime() - 330 * 24 * 60 * 60 * 1000);

    assert.equal(timeAgo(twoMonthsAgo.toISOString()), "2 months ago");
    assert.equal(timeAgo(elevenMonthsAgo.toISOString()), "11 months ago");
  });

  await t.test("returns singular 'year ago' for 1-2 years", () => {
    const now = new Date();
    const oneYearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);

    assert.equal(timeAgo(oneYearAgo.toISOString()), "1 year ago");
  });

  await t.test("returns plural 'years ago' for 2+ years", () => {
    const now = new Date();
    const twoYearsAgo = new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000);
    const fiveYearsAgo = new Date(now.getTime() - 5 * 365 * 24 * 60 * 60 * 1000);

    assert.equal(timeAgo(twoYearsAgo.toISOString()), "2 years ago");
    assert.equal(timeAgo(fiveYearsAgo.toISOString()), "5 years ago");
  });
});
