function countNegatives(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  let ans = 0;
  let row = 0;
  let col = n - 1;
  while (row < m && col >= 0) {
    if (grid[row][col] < 0) {
      col--;
    } else {
      ans += n - col - 1;
      row++;
    }
  }

  if (col < 0) {
    ans += (m - row) * n;
  }

  return ans;
}

export {};
