function arraySign(nums: number[]): number {
  let result = 1;

  for (const num of nums) {
    if (num === 0) return 0;

    if (num < 0) {
      result = result * -1;
    }
  }

  return result;
}

export { arraySign };
