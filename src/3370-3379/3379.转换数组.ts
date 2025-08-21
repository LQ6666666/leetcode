function constructTransformedArray(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array<number>(n);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      result[i] = num;
    } else if (num > 0) {
      const j = (i + num) % n;
      result[i] = nums[j];
    } else {
      const j = i - Math.abs(num % n);
      result[i] = nums[j < 0 ? n + j : j];
    }
  }

  return result;
}

export { constructTransformedArray };
