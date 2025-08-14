function checkValid(matrix: number[][]): boolean {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    const rowSet = new Set<number>();
    const columnSet = new Set<number>();
    for (let j = 0; j < n; j++) {
      if (rowSet.has(matrix[i][j]) || columnSet.has(matrix[j][i])) {
        return false;
      }
      rowSet.add(matrix[i][j]);
      columnSet.add(matrix[j][i]);
    }
  }

  return true;
}

export { checkValid };
