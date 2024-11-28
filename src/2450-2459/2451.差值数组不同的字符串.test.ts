import { describe, expect, test } from "vitest";
import { oddString } from "./2451.差值数组不同的字符串";

describe("2451.差值数组不同的字符串", () => {
  test("1", () => {
    expect(oddString(["adc", "wzy", "abc"])).toBe("abc");
  });

  test("2", () => {
    expect(oddString(["aaa", "bob", "ccc", "ddd"])).toBe("bob");
  });
});
