function maxSum(grid: number[][]): number {
  let ans = 0;

  const m = grid.length;
  const n = grid[0].length;

  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      // 枚举中心点
      ans = Math.max(
        ans,
        grid[i - 1][j - 1] +
          grid[i - 1][j] +
          grid[i - 1][j + 1] +
          grid[i][j] +
          grid[i + 1][j - 1] +
          grid[i + 1][j] +
          grid[i + 1][j + 1]
      );
    }
  }

  return ans;
}

export { maxSum };
