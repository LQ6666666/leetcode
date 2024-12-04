import { expect, test } from "vitest";
import { stringHash } from "./3271.哈希分割字符串";

test("1", () => {
  expect(stringHash("abcd", 2)).toBe("bf");
});

test("2", () => {
  expect(stringHash("mxz", 3)).toBe("i");
});
