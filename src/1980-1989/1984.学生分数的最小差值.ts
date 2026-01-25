function minimumDifference(nums: number[], k: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let ans = Number.MAX_SAFE_INTEGER;

  for (let i = 0, j = k - 1; j < n; i++, j++) {
    ans = Math.min(ans, nums[j] - nums[i]);
  }

  return ans;
}

export {};
