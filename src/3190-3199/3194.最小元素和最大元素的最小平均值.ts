function minimumAverage(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n / 2; i++) {
    ans = Math.min(ans, (nums[i] + nums[n - i - 1]) / 2);
  }

  return ans;
}

export { minimumAverage };
