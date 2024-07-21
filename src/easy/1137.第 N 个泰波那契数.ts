function tribonacci(n: number): number {
  const dp = new Array<number>(n + 3);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

export { tribonacci };
