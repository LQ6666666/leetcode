function* fibGenerator(): Generator<number, any, number> {
  const dp = [0, 1];
  yield 0;

  while (true) {
    yield dp[1];
    const t = dp[0];
    dp[0] = dp[1];
    dp[1] = t + dp[1];
  }
}

export {};
