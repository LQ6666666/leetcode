function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const m = rowSum.length;
  const n = colSum.length;
  const ans = Array.from<unknown, number[]>({ length: m }, () => Array<number>(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = Math.min(rowSum[i], colSum[j]);
      rowSum[i] -= ans[i][j];
      colSum[j] -= ans[i][j];
    }
  }

  return ans;
}

export { restoreMatrix };
