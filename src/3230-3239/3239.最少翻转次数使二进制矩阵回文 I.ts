function minFlips(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let row = 0;
  let col = 0;
  // 行
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      if (grid[i][j] !== grid[i][n - j - 1]) {
        row++;
      }
    }
  }
  // 列
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(m / 2); j++) {
      if (grid[j][i] !== grid[m - j - 1][i]) {
        col++;
      }
    }
  }

  return Math.min(row, col);
}

export { minFlips };
