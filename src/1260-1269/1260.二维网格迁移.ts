function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;
  k = k % (m * n);

  const arr = new Array<number>(m * n);
  let index = k;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[index % (m * n)] = grid[i][j];
      index++;
    }
  }

  const ans = Array.from({ length: m }, () => new Array<number>(n));
  index = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = arr[index];
      index++;
    }
  }

  return ans;
}

export { shiftGrid };
