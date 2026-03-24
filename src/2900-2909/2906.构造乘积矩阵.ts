function constructProductMatrix(grid: number[][]): number[][] {
  const MOD = 12345;

  const m = grid.length;
  const n = grid[0].length;
  const p = Array.from({ length: m }, () => new Array<number>(n).fill(0));

  let suf = 1;
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      p[i][j] = suf;
      suf = (suf * grid[i][j]) % MOD;
    }
  }

  let pre = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      p[i][j] = (p[i][j] * pre) % MOD;
      pre = (pre * grid[i][j]) % MOD;
    }
  }

  return p;
}

export {};
