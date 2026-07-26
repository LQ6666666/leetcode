function surfaceArea(grid: number[][]): number {
  const n = grid.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = grid[i][j];
      if (v > 0) {
        ans += 2;
        // 上
        ans += i - 1 < 0 ? v : v > grid[i - 1][j] ? v - grid[i - 1][j] : 0;
        // 下
        ans += i + 1 >= n ? v : v > grid[i + 1][j] ? v - grid[i + 1][j] : 0;
        // 左
        ans += j - 1 < 0 ? v : v > grid[i][j - 1] ? v - grid[i][j - 1] : 0;
        // 右
        ans += j + 1 >= n ? v : v > grid[i][j + 1] ? v - grid[i][j + 1] : 0;
      }
    }
  }
  return ans;
}

export {};
