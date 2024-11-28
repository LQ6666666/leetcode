function rangeAddQueries(n: number, queries: number[][]): number[][] {
  const diff = Array.from({ length: n + 2 }, () => new Array<number>(n + 2).fill(0));

  // 二维等分模板
  for (const [row1, col1, row2, col2] of queries) {
    diff[row1 + 1][col1 + 1]++;
    diff[row1 + 1][col2 + 2]--;
    diff[row2 + 2][col1 + 1]--;
    diff[row2 + 2][col2 + 2]++;
  }

  const ans = Array.from({ length: n }, () => new Array<number>(n));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      ans[i - 1][j - 1] = diff[i][j] += diff[i][j - 1] + diff[i - 1][j] - diff[i - 1][j - 1];
    }
  }

  return ans;
}

export { rangeAddQueries };
