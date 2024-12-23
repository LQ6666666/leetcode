import { expect, test } from "vitest";
import { minCharacters } from "./1737.满足三条件之一需改变的最少字符数";

test("1", () => {
  expect(minCharacters("aba", "caa")).toBe(2);
});

test("2", () => {
  expect(minCharacters("dabadd", "cda")).toBe(3);
});
