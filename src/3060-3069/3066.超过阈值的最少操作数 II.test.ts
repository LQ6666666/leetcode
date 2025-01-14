import { expect, test } from "vitest";
import { minOperations } from "./3066.超过阈值的最少操作数 II";

test("1", () => {
  expect(minOperations([2, 11, 10, 1, 3], 10)).toBe(2);
});

test("2", () => {
  expect(minOperations([1, 1, 2, 4, 9], 20)).toBe(4);
});

test("3", () => {
  expect(minOperations([42, 46], 42)).toBe(0);
});

test("4", () => {
  expect(minOperations([19, 44, 61, 96, 84, 79, 84, 61, 97, 44], 44)).toBe(1);
});
