function maxSideLength(mat: number[][], threshold: number): number {
  const m = mat.length;
  const n = mat[0].length;
  // 二维前缀和
  const sum = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sum[i + 1][j + 1] = sum[i + 1][j] + sum[i][j + 1] - sum[i][j] + mat[i][j];
    }
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      while (i + ans < m && j + ans < n && helper(i, j, i + ans, j + ans) <= threshold) {
        ans++;
      }
    }
  }

  return ans;

  function helper(r1: number, c1: number, r2: number, c2: number): number {
    return sum[r2 + 1][c2 + 1] - sum[r2 + 1][c1] - sum[r1][c2 + 1] + sum[r1][c1];
  }
}

export {};
