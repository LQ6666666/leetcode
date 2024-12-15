import { expect, test } from "vitest";
import { minSetSize } from "./1338.数组大小减半";

test("1", () => {
  expect(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7])).toBe(2);
});

test("2", () => {
  expect(minSetSize([7, 7, 7, 7, 7, 7])).toBe(1);
});
