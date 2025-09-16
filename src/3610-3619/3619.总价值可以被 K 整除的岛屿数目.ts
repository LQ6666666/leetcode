function countIslands(grid: number[][], k: number): number {
  const m = grid.length;
  const n = grid[0].length;

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0 && dfs(i, j) % k === 0) {
        ans++;
      }
    }
  }

  return ans;

  function dfs(i: number, j: number): number {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
      return 0;
    }

    const value = grid[i][j];
    grid[i][j] = 0;

    return value + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
  }
}

export { countIslands };
