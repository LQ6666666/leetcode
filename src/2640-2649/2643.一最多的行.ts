function rowAndMaximumOnes(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;
  let index = 0;
  let maxCount = 0;

  for (let i = 0; i < m; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }

  return [index, maxCount];
}

export { rowAndMaximumOnes };
