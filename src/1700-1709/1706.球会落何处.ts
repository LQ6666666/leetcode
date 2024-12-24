function findBall(grid: number[][]): number[] {
  const n = grid[0].length;
  const ans = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    ans[i] = helper(grid, i);
  }

  return ans;
}

function helper(grid: number[][], index: number): number {
  const m = grid.length;
  const n = grid[0].length;

  let row = 0;
  let col = index;

  while (row < m) {
    // 挡导向到箱子的左边上
    if (col === 0 && grid[row][col] === -1) {
      break;
    }
    // 挡导向到箱子的右边上
    if (col === n - 1 && grid[row][col] === 1) {
      break;
    }
    // 在两块挡板之间的 "V" 形图案
    if (
      (grid[row][col] === 1 && grid[row][col + 1] === -1) ||
      (grid[row][col] === -1 && grid[row][col - 1] === 1)
    ) {
      break;
    }

    col = grid[row][col] === 1 ? col + 1 : col - 1;
    row++;
  }

  return row === m ? col : -1;
}

export { findBall };
