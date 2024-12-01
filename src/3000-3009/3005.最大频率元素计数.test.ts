import { test, expect } from "vitest";
import { maxFrequencyElements } from "./3005.最大频率元素计数";

test("1.test", () => {
  expect(maxFrequencyElements([1, 2, 2, 3, 1, 4])).toBe(4);
});

test("2.test", () => {
  expect(maxFrequencyElements([1, 2, 3, 4, 5])).toBe(5);
});

test("3.test", () => {
  expect(maxFrequencyElements([1])).toBe(1);
});
