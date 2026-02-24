function maximizeExpressionOfThree(nums: number[]): number {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    if (num >= first) {
      second = first;
      first = num;
    } else if (num > second) {
      second = num;
    }
    min = Math.min(min, num);
  }
  return first + second - min;
}

export {};
