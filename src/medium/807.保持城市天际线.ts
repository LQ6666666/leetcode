function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const n = grid.length;
  const rows = new Array<number>(n).fill(0);
  const cols = new Array<number>(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rows[i] = Math.max(grid[i][j], rows[i]);
      cols[i] = Math.max(grid[j][i], cols[i]);
    }
  }

  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const height = Math.min(cols[i], rows[j]);
      ans += height - grid[i][j];
    }
  }

  return ans;
}

export { maxIncreaseKeepingSkyline };
