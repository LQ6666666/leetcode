function sortMatrix(grid: number[][]): number[][] {
  const n = grid.length;

  for (let i = 0; i < n - 1; i++) {
    const arr: number[] = [];
    for (let j = n - i - 1, k = 0; j < n && k < n; j++, k++) {
      arr.push(grid[k][j]);
    }
    arr.sort((a, b) => a - b);
    for (let j = n - i - 1, k = 0; j < n && k < n; j++, k++) {
      grid[k][j] = arr[k];
    }
  }

  for (let i = 0; i < n; i++) {
    const arr: number[] = [];
    for (let j = 0, k = i; j < n && k < n; j++, k++) {
      arr.push(grid[k][j]);
    }
    arr.sort((a, b) => b - a);
    for (let j = 0, k = i; j < n && k < n; j++, k++) {
      grid[k][j] = arr[j];
    }
  }

  return grid;
}

export { sortMatrix };
