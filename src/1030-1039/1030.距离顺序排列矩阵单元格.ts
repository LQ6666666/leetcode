function allCellsDistOrder(
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number
): number[][] {
  const ans = new Array<[row: number, col: number]>(rows * cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ans[i * cols + j] = [i, j];
    }
  }

  ans.sort(
    ([rowA, colA], [rowB, colB]) =>
      Math.abs(rowA - rCenter) +
      Math.abs(colA - cCenter) -
      (Math.abs(rowB - rCenter) + Math.abs(colB - cCenter))
  );
  return ans;
}

export { allCellsDistOrder };
