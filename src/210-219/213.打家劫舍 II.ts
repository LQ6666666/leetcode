function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  return Math.max(impl(nums.slice(0, n - 1)), impl(nums.slice(1, n)));
}

function impl(nums: number[]): number {
  const n = nums.length;

  const dp = new Array<number>(n + 1);
  dp[0] = 0;
  dp[1] = nums[0];

  for (let k = 2; k <= n; k++) {
    dp[k] = Math.max(dp[k - 1], dp[k - 2] + nums[k - 1]);
  }

  return dp[n];
}

export { rob };
