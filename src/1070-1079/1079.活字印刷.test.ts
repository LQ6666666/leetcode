import { numTilePossibilities } from "../1079.活字印刷";

describe("回溯", () => {
  it("1.test", () => {
    expect(numTilePossibilities("AAB")).toBe(8);
  });

  it("2.test", () => {
    expect(numTilePossibilities("AAABBC")).toBe(188);
  });

  it("3.test", () => {
    expect(numTilePossibilities("V")).toBe(1);
  });
});
