function minAbsDiff(grid: number[][], k: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  const ans = Array.from({ length: m - k + 1 }, () => new Array<number>(n - k + 1));

  const a = new Array<number>(k * k);
  for (let i = 0; i < m - k + 1; i++) {
    for (let j = 0; j < n - k + 1; j++) {
      let index = 0;
      for (let x = 0; x < k; x++) {
        for (let y = 0; y < k; y++) {
          a[index++] = grid[i + x][j + y];
        }
      }
      a.sort((a, b) => a - b);

      let res = Number.MAX_SAFE_INTEGER;
      for (let p = 1; p < k * k; p++) {
        if (a[p] > a[p - 1]) {
          res = Math.min(res, a[p] - a[p - 1]);
        }
      }

      if (res < Number.MAX_SAFE_INTEGER) {
        ans[i][j] = res;
      } else {
        ans[i][j] = 0;
      }
    }
  }

  return ans;
}

export {};
