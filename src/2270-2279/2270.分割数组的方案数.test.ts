import { expect, test } from "vitest";
import { waysToSplitArray } from "./2270.分割数组的方案数";

test("1", () => {
  expect(waysToSplitArray([10, 4, -8, 7])).toBe(2);
});

test("2", () => {
  expect(waysToSplitArray([2, 3, 1, 0])).toBe(2);
});
