import { buildArray } from "../1441.用栈操作构建数组";

describe("模拟", () => {
  it("1.test", () => {
    expect(buildArray([1, 3], 3)).toEqual(["Push", "Push", "Pop", "Push"]);
  });

  it("2.test", () => {
    expect(buildArray([2, 3, 4], 4)).toEqual(["Push", "Pop", "Push", "Push", "Push"]);
  });

  it("3.test", () => {
    expect(buildArray([1, 2, 3], 3)).toEqual(["Push", "Push", "Push"]);
  });

  it("4.test", () => {
    expect(buildArray([1, 2], 4)).toEqual(["Push", "Push"]);
  });
});
