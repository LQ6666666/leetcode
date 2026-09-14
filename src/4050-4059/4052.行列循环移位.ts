function cyclicShift(
  n: number,
  grid: number[][],
  rowShift: number[],
  colShift: number[]
): number[][] {
  const ans = Array.from({ length: n }, () => new Array<number>(n));

  for (let i = 0; i < n; i++) {
    const k = rowShift[i];
    for (let j = 0; j < n; j++) {
      ans[i][(j - k + n) % n] = grid[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = ans[i][j];
    }
  }

  for (let j = 0; j < n; j++) {
    const k = colShift[j];
    for (let i = 0; i < n; i++) {
      ans[(i - k + n) % n][j] = grid[i][j];
    }
  }

  return ans;
}

export {};
