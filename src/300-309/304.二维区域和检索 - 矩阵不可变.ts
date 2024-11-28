class NumMatrix {
  private sum: number[][];

  constructor(matrix: number[][]) {
    this.sum = [];
    const m = matrix.length;
    if (m === 0) return;
    const n = matrix[0].length;
    if (n === 0) return;

    const sum = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
    this.sum = sum;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + matrix[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    row1++, row2++;
    col1++, col2++;

    return (
      this.sum[row2][col2] -
      this.sum[row1 - 1][col2] -
      this.sum[row2][col1 - 1] +
      this.sum[row1 - 1][col1 - 1]
    );
  }
}

export { NumMatrix };
