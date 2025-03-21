function onesMinusZeros(grid: (0 | 1)[][]): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  const ans = Array.from({ length: m }, () => new Array(n));

  const oneRowCount = new Array<number>(m).fill(0);
  const zeroRowCount = new Array<number>(m).fill(0);
  const oneColCount = new Array<number>(n).fill(0);
  const zeroColCount = new Array<number>(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        oneRowCount[i]++;
        oneColCount[j]++;
      } else {
        zeroRowCount[i]++;
        zeroColCount[j]++;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = oneRowCount[i] + oneColCount[j] - zeroRowCount[i] - zeroColCount[j];
    }
  }

  return ans;
}

export { onesMinusZeros };
