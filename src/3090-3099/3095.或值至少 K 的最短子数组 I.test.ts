import { expect, test } from "vitest";
import { minimumSubarrayLength } from "./3095.或值至少 K 的最短子数组 I";

test("1", () => {
  expect(minimumSubarrayLength([1, 2, 3], 2)).toBe(1);
});

test("1", () => {
  expect(minimumSubarrayLength([2, 1, 8], 10)).toBe(3);
});

test("1", () => {
  expect(minimumSubarrayLength([1, 2], 0)).toBe(1);
});
