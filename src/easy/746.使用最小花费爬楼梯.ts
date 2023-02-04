function minCostClimbingStairs(cost: number[]): number {
  // dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  const n = cost.length;
  const dp = [0, 0];
  for (let i = 2; i <= n; i++) {
    const sum = Math.min(dp[1] + cost[i - 1], dp[0] + cost[i - 2]);
    dp[0] = dp[1];
    dp[1] = sum;
  }
  return dp[1];
}

export { minCostClimbingStairs };
