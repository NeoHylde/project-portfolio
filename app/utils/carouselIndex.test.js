import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { nextIndex, prevIndex } from "./carouselIndex.js";

describe("nextIndex", () => {
  test("advances to the next index", () => {
    assert.equal(nextIndex(0, 3), 1);
    assert.equal(nextIndex(1, 3), 2);
  });

  test("wraps around from the last index to the first", () => {
    assert.equal(nextIndex(2, 3), 0);
  });

  test("wraps immediately when there is only one item", () => {
    assert.equal(nextIndex(0, 1), 0);
  });
});

describe("prevIndex", () => {
  test("moves to the previous index", () => {
    assert.equal(prevIndex(2, 3), 1);
    assert.equal(prevIndex(1, 3), 0);
  });

  test("wraps around from the first index to the last", () => {
    assert.equal(prevIndex(0, 3), 2);
  });

  test("wraps immediately when there is only one item", () => {
    assert.equal(prevIndex(0, 1), 0);
  });
});
