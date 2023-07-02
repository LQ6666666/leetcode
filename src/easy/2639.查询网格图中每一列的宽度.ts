function findColumnWidth(grid: number[][]): number[] {
  const m = grid.length;
  const n = grid[0].length;

  const ans: number[] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j] = Math.max(grid[i][j].toString().length, ans[j] ?? 0);
    }
  }

  return ans;
}


export { findColumnWidth };
