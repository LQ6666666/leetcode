function numDecodings(s: string): number {
  const n = s.length;
  const f = new Array<number>(n + 1).fill(0);
  f[0] = 1;

  // dp[i] = dp[i - 1] + dp[i  - 2]

  for (let i = 1; i <= n; ++i) {
    if (s[i - 1] !== "0") {
      f[i] += f[i - 1];
    }
    if (i > 1 && s[i - 2] != "0" && +s[i - 2] * 10 + +s[i - 1] <= 26) {
      f[i] += f[i - 2];
    }
  }

  return f[n];
}

export {};
