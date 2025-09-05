function matrixBlockSum(mat: number[][], k: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  const ans = Array.from({ length: m }, () => new Array<number>(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const startI = Math.max(0, i - k);
      const startJ = Math.max(0, j - k);
      const endI = Math.min(i + k + 1, m);
      const endJ = Math.min(j + k + 1, n);
      ans[i][j] = helper(startI, startJ, endI, endJ);
    }
  }

  return ans;

  function helper(startI: number, startJ: number, endI: number, endJ: number): number {
    let sum = 0;
    for (let i = startI; i < endI; i++) {
      for (let j = startJ; j < endJ; j++) {
        sum += mat[i][j];
      }
    }
    return sum;
  }
}
