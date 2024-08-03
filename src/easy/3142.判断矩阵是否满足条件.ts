function satisfiesConditions(grid: number[][]): boolean {
  const m = grid.length;
  const n = grid[0].length;

  let prev = -1;
  for (let i = 0; i < n; i++) {
    if (grid[0][i] === prev) {
      return false;
    }
    prev = grid[0][i];

    for (let j = 1; j < m; j++) {
      if (grid[j][i] !== grid[j - 1][i]) {
        return false;
      }
    }
  }

  return true;
}

export { satisfiesConditions };
