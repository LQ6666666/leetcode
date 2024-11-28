function getRow(rowIndex: number): number[] {
  let dp = [1];

  for (let i = 1; i <= rowIndex; i++) {
    const n = dp.length + 1;
    const newDp = new Array(n);
    for (let j = 0; j < n; j++) {
      newDp[j] = (dp[j - 1] ?? 0) + (dp[j] ?? 0);
    }
    dp = newDp;
  }

  return dp;
}

export { getRow };
