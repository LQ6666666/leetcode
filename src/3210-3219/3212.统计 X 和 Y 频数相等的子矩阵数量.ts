function numberOfSubmatrices(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const sum = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => [0, 0]));

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sum[i + 1][j + 1][0] = sum[i + 1][j][0] + sum[i][j + 1][0] - sum[i][j][0];
      sum[i + 1][j + 1][1] = sum[i + 1][j][1] + sum[i][j + 1][1] - sum[i][j][1];
      if (grid[i][j] === "X") {
        sum[i + 1][j + 1][0]++;
      } else if (grid[i][j] === "Y") {
        sum[i + 1][j + 1][1]++;
      }

      if (sum[i + 1][j + 1][0] > 0 && sum[i + 1][j + 1][0] == sum[i + 1][j + 1][1]) {
        ans++;
      }
    }
  }

  return ans;
}

export {};
