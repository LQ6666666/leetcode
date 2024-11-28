function getMaximumGold(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const visits = Array.from({ length: m }, () => new Array<0 | 1>(n).fill(0));
  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 0) {
        dfs(i, j, 0);
      }
    }
  }

  return ans;

  function dfs(i: number, j: number, x: number): void {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (visits[i][j] || grid[i][j] === 0) return;

    x += grid[i][j];
    ans = Math.max(ans, x);

    visits[i][j] = 1;

    dfs(i + 1, j, x);
    dfs(i - 1, j, x);
    dfs(i, j + 1, x);
    dfs(i, j - 1, x);

    visits[i][j] = 0;
  }
}

export { getMaximumGold };
