import { describe, it, expect } from "vitest";
import { isAdditiveNumber } from "./306.累加数";

describe('true', () => {
  it('112358', () => {
    expect(isAdditiveNumber("112358")).toBe(true);
  });

  it('199100199', () => {
    expect(isAdditiveNumber("199100199")).toBe(true);
  });

  it('211738', () => {
    expect(isAdditiveNumber("211738")).toBe(true);
  });

  it('198019823962', () => {
    expect(isAdditiveNumber("198019823962")).toBe(true);
  });
});

describe('false', () => {
  it('1023', () => {
    expect(isAdditiveNumber("1023")).toBe(false);
  })
});

