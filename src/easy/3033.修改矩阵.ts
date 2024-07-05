function modifiedMatrix(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < n; i++) {
    let indexList: number[] = [];
    let max = matrix[0][i];

    for (let j = 0; j < m; j++) {
      const value = matrix[j][i];
      if (value === -1) {
        indexList.push(j);
      } else {
        max = Math.max(max, value);
      }
    }

    for (const index of indexList) {
      matrix[index][i] = max;
    }
  }

  return matrix;
}

export { modifiedMatrix };
