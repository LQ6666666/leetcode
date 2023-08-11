function diagonalSum(mat: number[][]): number {
  const n = mat.length;
  let i = 0;
  let j = 0;
  let sum = 0;
  while (i < n && j < n) {
    sum += mat[i][j];
    i++, j++;
  }

  (i = 0), (j = n - 1);
  while (i < n && j >= 0) {
    sum += mat[i][j];
    i++, j--;
  }

  if (n % 2 !== 0) {
    sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  }

  return sum;
}

export { diagonalSum };
