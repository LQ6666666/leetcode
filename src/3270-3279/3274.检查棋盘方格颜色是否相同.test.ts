import { expect, test } from "vitest";
import { checkTwoChessboards } from "./3274.检查棋盘方格颜色是否相同";

test("1.颜色相同", () => {
  expect(checkTwoChessboards("a1", "c3")).toBe(true);
});

test("2.颜色不相同", () => {
  expect(checkTwoChessboards("a1", "h3")).toBe(false);
});

test("3.颜色不相同", () => {
  expect(checkTwoChessboards("d1", "h4")).toBe(false);
});
