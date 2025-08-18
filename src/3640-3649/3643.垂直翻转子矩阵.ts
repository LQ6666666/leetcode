function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < Math.floor(k / 2); i++) {
    for (let j = y; j < y + k; j++) {
      const temp = grid[i + x][j];
      grid[i + x][j] = grid[x + k - i - 1][j];
      grid[x + k - i - 1][j] = temp;
    }
  }

  return grid;
}

export { reverseSubmatrix };
