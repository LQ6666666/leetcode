function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < n; i++) {
    if (!helper(matrix, 0, i)) {
      return false;
    }
  }

  for (let i = 1; i < m; i++) {
    if (!helper(matrix, i, 0)) {
      return false;
    }
  }

  return true;
}

function helper(matrix: number[][], row: number, col: number) {
  const m = matrix.length;
  const n = matrix[0].length;
  const num = matrix[row++][col++];

  while (row < m && col < n) {
    if (matrix[row][col] !== num) {
      return false;
    }

    row++, col++;
  }

  return true;
}

export { isToeplitzMatrix };
