function largestArea(grid: string[]): number {
  const m = grid.length;
  const n = grid[0].length;

  const visitSet = Array.from({ length: m }, () => new Array<0 | 1>(n).fill(0));

  for (let i = 0; i < m; i++) {
    dfs(i, 0, grid[i][0]);
    dfs(i, n - 1, grid[i][n - 1]);
  }

  for (let i = 0; i < n; i++) {
    dfs(0, i, grid[0][i]);
    dfs(m - 1, i, grid[m - 1][i]);
  }

  // 将初始化为0的所有相连元素置为0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "0" && !visitSet[i][j]) {
        for (const [x, y] of [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0]
        ]) {
          const dx = i + x;
          const dy = j + y;

          if (dx >= 0 && dy >= 0 && dx < m && dy < n) {
            if (grid[dx][dy] !== "0") {
              dfs(dx, dy, grid[dx][dy]);
            }
          }
        }
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const value = grid[i][j];
      if (value === "0" || visitSet[i][j]) continue;

      let flag = true;
      for (const [x, y] of [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
      ]) {
        const dx = i + x;
        const dy = j + y;

        if (dx >= 0 && dy >= 0 && dx < m && dy < n) {
          if (grid[dx][dy] === "0") {
            flag = false;
          }
        }
      }

      if (flag) {
        ans = Math.max(dfs(i, j, value), ans);
      }
    }
  }

  return ans;

  function dfs(i: number, j: number, value: string) {
    if (i < 0 || j < 0 || i >= m || j >= n) return 0;
    if (visitSet[i][j] || grid[i][j] !== value) return 0;

    visitSet[i][j] = 1;

    let result = 1;

    for (const [x, y] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ]) {
      result += dfs(i + x, j + y, value);
    }

    return result;
  }
}

export { largestArea };
