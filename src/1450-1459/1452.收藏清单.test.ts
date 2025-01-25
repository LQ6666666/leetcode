import { expect, test } from "vitest";
import { peopleIndexes } from "./1452.收藏清单";

test("1", () => {
  expect(
    peopleIndexes([
      ["leetcode", "google", "facebook"],
      ["google", "microsoft"],
      ["google", "facebook"],
      ["google"],
      ["amazon"]
    ])
  ).toEqual([0, 1, 4]);
});

test("2", () => {
  expect(
    peopleIndexes([
      ["leetcode", "google", "facebook"],
      ["leetcode", "amazon"],
      ["facebook", "google"]
    ])
  ).toEqual([0, 1]);
});

test("3", () => {
  expect(peopleIndexes([["leetcode"], ["google"], ["facebook"], ["amazon"]])).toEqual([0, 1, 2, 3]);
});
