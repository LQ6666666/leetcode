function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;

  const ans = new Array<number>(m * n);
  let i = 0;
  let row = 0;
  let col = 0;
  let flag = true;
  while (i < m * n) {
    ans[i++] = mat[row][col];

    if (flag) {
      if (row - 1 < 0 || col + 1 >= n) {
        if (col + 1 >= n) {
          row++;
        } else {
          col++;
        }
        flag = false;
      } else {
        row -= 1;
        col += 1;
      }
    } else {
      if (row + 1 >= m || col - 1 < 0) {
        if (row + 1 >= m) {
          col++;
        } else {
          row++;
        }
        flag = true;
      } else {
        row += 1;
        col -= 1;
      }
    }
  }

  return ans;
}

export { findDiagonalOrder };
