function smallestRangeII(nums: number[], k: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = nums[n - 1] - nums[0];

  for (let i = 1; i < n; i++) {
    const max = Math.max(nums[i - 1] + k, nums[n - 1] - k);
    const min = Math.min(nums[i] - k, nums[0] + k);
    ans = Math.min(max - min, ans);
  }

  return ans;
}

export { smallestRangeII };
