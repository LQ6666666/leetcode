import { expect, test } from "vitest";
import { combinationSum2 } from "./40.组合总和 II";

test("1", () => {
  expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).toEqual([
    [1, 1, 6],
    [1, 2, 5],
    [1, 7],
    [2, 6]
  ]);
});

test("2", () => {
  expect(combinationSum2([2, 5, 2, 1, 2], 5)).toEqual([[1, 2, 2], [5]]);
});
