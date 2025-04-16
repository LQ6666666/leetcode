function findMaxFish(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  const visits = Array.from({ length: m }, () => new Array<0 | 1>(n).fill(0));

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = Math.max(dfs(i, j), ans);
    }
  }
  return ans;

  function dfs(r: number, c: number): number {
    if (r < 0 || r >= m || c < 0 || c >= n) return 0;
    if (grid[r][c] === 0 || visits[r][c] === 1) return 0;
    visits[r][c] = 1;

    return dfs(r, c + 1) + dfs(r, c - 1) + dfs(r + 1, c) + dfs(r - 1, c) + grid[r][c];
  }
}

export { findMaxFish };
