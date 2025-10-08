function minPairSum(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    max = Math.max(nums[i] + nums[n - i - 1], max);
  }
  return max;
}

export { minPairSum };
