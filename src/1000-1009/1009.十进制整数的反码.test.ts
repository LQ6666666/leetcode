import { expect, test } from "vitest";
import { bitwiseComplement } from "./1009.十进制整数的反码";

test("1", () => {
  expect(bitwiseComplement(5)).toBe(2);
});

test("2", () => {
  expect(bitwiseComplement(7)).toBe(0);
});

test("3", () => {
  expect(bitwiseComplement(10)).toBe(5);
});
