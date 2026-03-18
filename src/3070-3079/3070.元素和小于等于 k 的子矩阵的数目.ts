function countSubmatrices(grid: number[][], k: number): number {
  const m = grid.length;
  const n = grid[0].length;
  const sum = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 二维前缀和模板
      sum[i + 1][j + 1] = sum[i + 1][j] + sum[i][j + 1] - sum[i][j] + grid[i][j];
      if (sum[i + 1][j + 1] <= k) {
        ans++;
      }
    }
  }
  return ans;
}

export {};
