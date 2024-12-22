import { expect, test } from "vitest";
import { getKth } from "./1387.将整数按权重排序";

test("1", () => {
  expect(getKth(12, 15, 2)).toBe(13);
});

test("2", () => {
  expect(getKth(7, 11, 4)).toBe(7);
});
