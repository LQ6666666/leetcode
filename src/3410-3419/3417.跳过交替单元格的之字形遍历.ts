function zigzagTraversal(grid: number[][]): number[] {
  const m = grid.length;
  const n = grid[0].length;

  const ans = new Array<number>(Math.ceil((m * n) / 2));
  let index = 0;
  let flag = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (flag === 0) {
        flag = 1;
        ans[index++] = grid[i][i % 2 !== 0 ? n - j - 1 : j];
      } else {
        flag = 0;
      }
    }
  }

  return ans;
}

export { zigzagTraversal };
