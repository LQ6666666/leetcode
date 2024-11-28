import { describe, expect, test } from "vitest";
import { quickSort, bubblingSort } from "./912.排序数组";

describe("快速排序", () => {
  test("1.test", () => {
    expect(quickSort([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
  });

  test("2.test", () => {
    expect(quickSort([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
  });
});

describe("冒泡排序", () => {
  test("1.test", () => {
    expect(bubblingSort([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
  });

  test("2.test", () => {
    expect(bubblingSort([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
  });

  const arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

  test("3.10000条数据", () => {
    expect(bubblingSort(arr)).toEqual(quickSort(arr));
  });
});
