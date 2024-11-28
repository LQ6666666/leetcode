import { describe, it, expect } from "vitest";
import { specialArray } from "./1608.特殊数组的特征值";

describe("暴力", () => {
  it("1.test", () => {
    expect(specialArray([3, 5])).toBe(2);
  });

  it("2.test", () => {
    expect(specialArray([0, 0])).toBe(-1);
  });

  it("3.test", () => {
    expect(specialArray([0, 4, 3, 0, 4])).toBe(3);
  });
});
