import { expect, test } from "vitest";
import { convertDateToBinary } from "./3280.将日期转换为二进制表示";

test("1", () => {
  // 100000100000, 10 和 11101 分别是 2080, 02 和 29 的二进制表示
  expect(convertDateToBinary("2080-02-29")).toBe("100000100000-10-11101");
});

test("2", () => {
  // 11101101100, 1 和 1 分别是 1900, 1 和 1 的二进制表示
  expect(convertDateToBinary("1900-01-01")).toBe("11101101100-1-1");
});
