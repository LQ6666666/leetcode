const dirs: [x: number, y: number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
];

function colorBorder(grid: number[][], row: number, col: number, color: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;

  const ans = Array.from({ length: m }, () => new Array<number>(n).fill(-1));
  let queue: [x: number, y: number][] = [[row, col]];
  while (queue.length) {
    let newQueue: [x: number, y: number][] = [];
    for (const [x, y] of queue) {
      let count = 0;

      for (const [dx, dy] of dirs) {
        const nx = dx + x;
        const ny = dy + y;
        // 超出范围
        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        // 颜色不一样
        if (grid[x][y] !== grid[nx][ny]) continue;

        count++;
        if (ans[nx][ny] === -1) {
          newQueue.push([nx, ny]);
        }
      }

      // 四个方向都相同
      ans[x][y] = count === 4 ? grid[x][y] : color;
    }
    queue = newQueue;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (ans[i][j] === -1) {
        ans[i][j] = grid[i][j];
      }
    }
  }

  return ans;
}

export { colorBorder };
