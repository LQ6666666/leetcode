function findChampion(grid: number[][]): number {
  const n = grid.length;
  for (let j = 0; ; j++) {
    let ok = true;
    for (let i = 0; i < n && ok; i++) {
      ok = grid[i][j] === 0;
    }
    if (ok) {
      return j;
    }
  }
}

export { findChampion };
