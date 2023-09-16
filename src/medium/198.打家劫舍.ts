function rob(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;

  // f(0) = 0
  // f(1) = nums[0]
  // f(k) = max(rob(k-1), nums[k-1] + rob(k-2))

  const dp = new Array<number>(n + 1);
  dp[0] = 0;
  dp[1] = nums[0];

  for (let k = 2; k <= n; k++) {
    dp[k] = Math.max(dp[k - 1], dp[k - 2] + nums[k - 1]);
  }

  return dp[n];
}

export {};
