function rotateGrid(grid: number[][], k: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  const len = Math.floor(Math.min(m, n) / 2);
  const ans = Array.from({ length: m }, () => new Array<number>(n));

  for (let i = 0; i < len; i++) {
    let left = i;
    let right = n - 1 - i;
    let top = i;
    let bottom = m - 1 - i;

    const list: number[] = [];
    for (let j = top; j <= bottom; j++) {
      list.push(grid[j][left]);
    }
    for (let j = left + 1; j <= right; j++) {
      list.push(grid[bottom][j]);
    }
    for (let j = bottom - 1; j >= top; j--) {
      list.push(grid[j][right]);
    }
    for (let j = right - 1; j > left; j--) {
      list.push(grid[top][j]);
    }

    let y = k % list.length;
    while (y) {
      list.unshift(list.pop()!);
      y--;
    }

    let index = 0;
    for (let j = top; j <= bottom; j++) {
      ans[j][left] = list[index++];
    }
    for (let j = left + 1; j <= right; j++) {
      ans[bottom][j] = list[index++];
    }
    for (let j = bottom - 1; j >= top; j--) {
      ans[j][right] = list[index++];
    }
    for (let j = right - 1; j > left; j--) {
      ans[top][j] = list[index++];
    }
  }
  return ans;
}

export {};
