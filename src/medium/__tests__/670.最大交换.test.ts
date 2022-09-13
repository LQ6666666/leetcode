import { maximumSwap } from "../670.最大交换";

describe("暴力", () => {
  it("1.交换数字2和数字7", () => {
    expect(maximumSwap(2736)).toBe(7236);
  });

  it("2.不需要交换", () => {
    expect(maximumSwap(9973)).toBe(9973);
  });

  it("3.下边界情况", () => {
    expect(maximumSwap(0)).toBe(0);
  });

  it("4.上边界情况", () => {
    expect(maximumSwap(100000000)).toBe(100000000);
  });
});
