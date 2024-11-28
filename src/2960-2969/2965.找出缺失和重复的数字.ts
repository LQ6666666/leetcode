function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length;
  const set = new Set<number>();
  const ans = [-1, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const value = grid[i][j];
      if (set.has(value)) {
        ans[0] = value;
      } else {
        set.add(value);
      }
    }
  }

  for (let i = 1; i <= n * n; i++) {
    if (!set.has(i)) {
      ans[1] = i;
      break;
    }
  }

  return ans;
}

export { findMissingAndRepeatedValues };
