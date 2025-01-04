import { expect, test } from "vitest";
import { monotoneIncreasingDigits } from "./738.单调递增的数字";

test("1", () => {
  expect(monotoneIncreasingDigits(10)).toBe(9);
});

test("2", () => {
  expect(monotoneIncreasingDigits(1234)).toBe(1234);
});

test("3", () => {
  expect(monotoneIncreasingDigits(332)).toBe(299);
});

test("4", () => {
  expect(monotoneIncreasingDigits(101)).toBe(99);
});
