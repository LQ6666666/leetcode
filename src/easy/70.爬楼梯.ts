function climbStairs$(n: number): number {
  let first = 0,
    second = 1;

  for (let i = 1; i <= n; i++) {
    const sum = first + second;
    first = second;
    second = sum;
  }

  return second;
}

function climbStairs(n: number): number {
  const dp = new Array<number>(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

export {};
