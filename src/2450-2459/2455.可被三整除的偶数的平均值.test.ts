import { averageValue } from "../2455.可被三整除的偶数的平均值";

describe("2455.可被三整除的偶数的平均值", () => {
  it("1", () => {
    expect(averageValue([1, 3, 6, 10, 12, 15])).toBe(9);
  });

  it("2", () => {
    expect(averageValue([1, 2, 4, 7, 10])).toBe(0);
  });
});
