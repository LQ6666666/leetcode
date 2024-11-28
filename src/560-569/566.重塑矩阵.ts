function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) return mat;

  const newMat = new Array<number[]>(r);
  let index = -1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (index === -1 || newMat[index].length === c) {
        index++;
        newMat[index] = [];
      }
      newMat[index].push(mat[i][j]);
    }
  }

  return newMat;
}

export { matrixReshape };
