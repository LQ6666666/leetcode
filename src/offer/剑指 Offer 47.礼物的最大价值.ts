function maxValue(grid: number[][]): number {
  //dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
  const n = grid.length;
  const m = grid[0].length;
  const dp = Array.from({ length: n }, () => new Array<number>(m).fill(0));
  dp[0][0] = grid[0][0];

  //可以首先计算出第一行第一列的礼物的最大价值，即直接累加
  //初始化第一列
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  //初始化第一行
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  //最大值一定是走到最右下角得到的，可以用反证法轻易证明
  return dp[n - 1][m - 1];
}

export {};
