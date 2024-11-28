function differenceOfDistinctValues(grid: number[][]): number[][] {
  const m = grid.length;
  const n = grid[0].length;
  const ans = Array.from({ length: m }, () => new Array<number>(n).fill(0));

  function countUniqueValues(r: number, c: number, dr: number, dc: number) {
    const values = new Set<number>();
    while (r >= 0 && r < m && c >= 0 && c < n) {
      values.add(grid[r][c]);
      r += dr;
      c += dc;
    }
    return values.size;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const topLeft = countUniqueValues(i - 1, j - 1, -1, -1);
      const bottomRight = countUniqueValues(i + 1, j + 1, 1, 1);
      ans[i][j] = Math.abs(topLeft - bottomRight);
    }
  }

  return ans;
}

export {};
