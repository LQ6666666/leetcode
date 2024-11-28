function numberOfRightTriangles(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const columnCount = new Array<number>(n).fill(0);
  const rowCount = new Array<number>(m).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowCount[i]++;
        columnCount[j]++;
      }
    }
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    if (rowCount[i] < 1) continue;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        ans += (rowCount[i] - 1) * (columnCount[j] - 1);
      }
    }
  }

  return ans;
}

export { numberOfRightTriangles };
