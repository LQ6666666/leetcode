/*
5   1   9   11                  15  14  12  16
2   4   8   10    水平翻转       13  3   6   7
13  3   6   7     =====>        2   4   8   10
15  14  12  16                  5   1   9   11

15  14  12  16                  15  13  2   5
13  3   6   7    主对角线翻转    14  3   4   1
2   4   8   10    =====>        12  6   8   9
5   1   9   11                  16  7   10  11
*/
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  // 水平翻转
  const mid = n >> 1;
  for (let i = 0; i < mid; i++) {
    for (let j = 0; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - i - 1][j];
      matrix[n - i - 1][j] = temp;
    }
  }

  // 主对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}

export { rotate };
