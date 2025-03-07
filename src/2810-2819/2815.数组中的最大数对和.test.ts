import { describe, it, expect } from "vitest";
import { maxSum } from "./2815.数组中的最大数对和";

describe("2815.数组中的最大数对和", () => {
  it("存在满足数位上最大的数字相等", () => {
    expect(maxSum([51, 71, 17, 24, 42])).toBe(88);
  });

  it("不存在数对满足数位上最大的数字相等", () => {
    expect(maxSum([1, 2, 3, 4])).toBe(-1);
  });
});
