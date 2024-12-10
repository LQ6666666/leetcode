import { expect, test } from "vitest";
import { minIncrementForUnique } from "./945.使数组唯一的最小增量";

test("1", () => {
  expect(minIncrementForUnique([1, 2, 2])).toBe(1);
});

test("2", () => {
  expect(minIncrementForUnique([3, 2, 1, 2, 1, 7])).toBe(6);
});
