import { expect, test } from "vitest";
import { minAnagramLength } from "./3138.同位字符串连接的最小长度";

test("1", () => {
  expect(minAnagramLength("abba")).toBe(2);
});

test("2", () => {
  expect(minAnagramLength("cdef")).toBe(4);
});

test("3", () => {
  expect(minAnagramLength("abbacc")).toBe(6);
});

test("4", () => {
  expect(minAnagramLength("jjj")).toBe(1);
});

test("5", () => {
  expect(minAnagramLength("jjjj")).toBe(1);
});
