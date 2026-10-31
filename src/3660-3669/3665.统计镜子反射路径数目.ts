function uniquePaths(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const memo = Array.from({ length: m }, () => Array.from({ length: n }, () => [-1, -1]));
  const MOD = 1_000_000_007;
  return dfs(m - 1, n - 1, 0);

  function dfs(i: number, j: number, k: number): number {
    if (i < 0 || j < 0) {
      return 0;
    }

    if (i === 0 && j === 0) {
      return 1;
    }

    if (memo[i][j][k] !== -1) {
      return memo[i][j][k];
    }

    let result = 0;

    if (grid[i][j] === 0) {
      result = (dfs(i, j - 1, 0) + dfs(i - 1, j, 1)) % MOD;
    } else if (k === 0) {
      result = dfs(i - 1, j, 1);
    } else if (k === 1) {
      result = dfs(i, j - 1, 0);
    }

    return (memo[i][j][k] = result);
  }
}

export {};
