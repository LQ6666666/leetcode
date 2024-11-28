import { describe, expect, it } from "vitest";
import { vowelStrings } from "./2559.统计范围内的元音字符串数";

describe("统计范围内的元音字符串数", () => {
  it("1.test", () => {
    expect(
      vowelStrings(
        ["aba", "bcb", "ece", "aa", "e"],
        [
          [0, 2],
          [1, 4],
          [1, 1]
        ]
      )
    ).toEqual([2, 3, 0]);
  });

  it("2.test", () => {
    expect(
      vowelStrings(
        ["a", "e", "i"],
        [
          [0, 2],
          [0, 1],
          [2, 2]
        ]
      )
    ).toEqual([3, 2, 1]);
  });
});
