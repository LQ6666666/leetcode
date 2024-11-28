function minPathCost(grid: number[][], moveCost: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  // 缓存
  const memo = Array.from({ length: m }, () => new Array(n).fill(0));

  let ans = Number.MAX_SAFE_INTEGER;
  // 枚举起点
  for (let i = 0; i < n; i++) {
    ans = Math.min(ans, dfs(0, i));
  }
  return ans;

  function dfs(i: number, j: number): number {
    if (i === m - 1) return grid[i][j];

    // 如果有缓存
    if (memo[i][j] !== 0) return memo[i][j];

    let result = Number.MAX_SAFE_INTEGER;
    for (let k = 0; k < n; k++) {
      result = Math.min(result, dfs(i + 1, k) + moveCost[grid[i][j]][k]);
    }
    return (memo[i][j] = result + grid[i][j]);
  }
}

export { minPathCost };
