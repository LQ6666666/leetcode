function sumOfThree(num: number): number[] {
  const b = Math.floor(num / 3);
  const a = b - 1;
  const c = b + 1;
  return a + b + c === num ? [a, b, c] : [];
}

export { sumOfThree };
