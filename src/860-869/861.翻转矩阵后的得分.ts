function matrixScore(grid: (0 | 1)[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  // 1. 反转行
  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 0) {
          grid[i][j] = 1;
        } else {
          grid[i][j] = 0;
        }
      }
    }
  }

  // 2. 反转列
  for (let col = 1; col < n; col++) {
    let count = 0;
    for (let row = 0; row < m; row++) {
      if (grid[row][col] === 1) {
        count++;
      }
    }
    // 1 的 数量大于 0 的数量
    if (count >= m - count) continue;

    for (let row = 0; row < m; row++) {
      if (grid[row][col] === 1) {
        grid[row][col] = 0;
      } else {
        grid[row][col] = 1;
      }
    }
  }

  let ans = 0;
  // 3. 计算结果
  for (let i = 0; i < m; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        temp += Math.pow(2, n - j - 1);
      }
    }
    ans += temp;
  }

  return ans;
}

export { matrixScore };
