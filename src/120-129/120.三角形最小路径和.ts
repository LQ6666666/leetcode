function minimumTotal(triangle: number[][]): number {
  const n = triangle.length;
  const f = Array.from<unknown, number[]>({ length: n }, () => new Array(n));
  f[n - 1] = triangle.at(-1)!;

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      f[i][j] = Math.min(f[i + 1][j], f[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return f[0][0];
}

export { minimumTotal };
