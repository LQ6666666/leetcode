function triangleType(nums: number[]): string {
  const [a, b, c] = nums;
  if (a + b <= c || a + c <= b || c + b <= a) {
    return "none";
  } else if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || a === c || b === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

export { triangleType };
