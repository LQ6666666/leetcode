function findColumnWidth$(grid: number[][]): number[] {
  const m = grid.length;
  const n = grid[0].length;

  const ans: number[] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j] = Math.max(grid[i][j].toString().length, ans[j] ?? 0);
    }
  }

  return ans;
}

function findColumnWidth(grid: number[][]): number[] {
  const m = grid.length;
  const n = grid[0].length;

  const ans = new Array<number>(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j] = Math.max(helper(grid[i][j]), ans[j]);
    }
  }

  return ans;
}

function helper(num: number): number {
  let count = num <= 0 ? 1 : 0;
  let x = Math.abs(num);

  while (x > 0) {
    count++;
    x = Math.floor(x / 10);
  }

  return count;
}

export { findColumnWidth };
