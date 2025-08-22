function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        ans = Math.max(ans, dfs(i, j));
      }
    }
  }

  return ans;

  function dfs(i: number, j: number): number {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return 0;
    }
    if (grid[i][j] === 0) {
      return 0;
    }

    grid[i][j] = 0;

    return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 1;
  }
}

export { maxAreaOfIsland };
