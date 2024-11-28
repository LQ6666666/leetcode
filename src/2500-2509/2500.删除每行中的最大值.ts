function deleteGreatestValue(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;

  const compareFn = (a: number, b: number) => b - a;
  // 每一行排序
  for (const row of grid) {
    row.sort(compareFn);
  }

  // 计算每一列的最大值
  let ans = 0;
  for (let i = 0; i < m; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < n; j++) {
      max = Math.max(max, grid[j][i]);
    }
    ans += max;
  }

  return ans;
}

export { deleteGreatestValue };
