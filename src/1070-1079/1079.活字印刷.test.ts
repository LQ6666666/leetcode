import { test, expect } from "vitest";

import { numTilePossibilities } from "./1079.活字印刷";

test("1.test", () => {
  expect(numTilePossibilities("AAB")).toBe(8);
});

test("2.test", () => {
  expect(numTilePossibilities("AAABBC")).toBe(188);
});

test("3.test", () => {
  expect(numTilePossibilities("V")).toBe(1);
});
