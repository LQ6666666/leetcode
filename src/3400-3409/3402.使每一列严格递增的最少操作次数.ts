function minimumOperations(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;

  for (let j = 0; j < n; j++) {
    for (let i = 1; i < m; i++) {
      if (grid[i - 1][j] >= grid[i][j]) {
        const num = grid[i - 1][j] + 1;
        ans += num - grid[i][j];
        grid[i][j] = num;
      }
    }
  }

  return ans;
}

export { minimumOperations };
