function closedIsland(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        if (dfs(i, j)) {
          ans++;
        }
      }
    }
  }

  return ans;

  function dfs(i: number, j: number): boolean {
    if (i < 0 || j < 0 || i >= m || j >= n) return false;

    if (grid[i][j] !== 0) return true;
    grid[i][j] = -1;

    const t = dfs(i + 1, j);
    const l = dfs(i, j + 1);
    const b = dfs(i - 1, j);
    const r = dfs(i, j - 1);
    return t && l && b && r;
  }
}

export {};
