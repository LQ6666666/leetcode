function findDegrees(matrix: number[][]): number[] {
  const n = matrix.length;
  const ans = new Array<number>(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[i] += matrix[i][j];
    }
  }

  return ans;
}

export { findDegrees };
