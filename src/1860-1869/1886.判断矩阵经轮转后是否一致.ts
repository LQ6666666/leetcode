function findRotation(mat: number[][], target: number[][]): boolean {
  const n = mat.length;

  for (let i = 0; i < 4; i++) {
    if (check()) {
      return true;
    }

    rotate();
  }

  return false;

  function rotate() {
    const nextMat = Array.from({ length: n }, () => new Array<number>(n));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        nextMat[j][n - i - 1] = mat[i][j];
      }
    }

    mat = nextMat;
  }

  function check(): boolean {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j] !== target[i][j]) {
          return false;
        }
      }
    }

    return true;
  }
}

export { findRotation };
