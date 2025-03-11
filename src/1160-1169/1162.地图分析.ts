function maxDistance(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  let queue: [x: number, y: number][] = [];
  const visits = Array.from({ length: m }, () => new Array<0 | 1>(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
        visits[i][j] = 1;
      } else {
      }
    }
  }

  if (queue.length == 0 || queue.length == n * m) return -1;

  let ans = -1;
  while (queue.length) {
    const newQueue: [x: number, y: number][] = [];

    for (const [x, y] of queue) {
      for (const [dx, dy] of [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
      ]) {
        const nx = dx + x;
        const ny = dy + y;

        if (nx < 0 || nx >= m || ny < 0 || ny >= n || visits[nx][ny] === 1) {
          continue;
        }

        visits[nx][ny] = 1;
        newQueue.push([nx, ny]);
      }
    }

    ans++;
    queue = newQueue;
  }

  return ans;
}

export { maxDistance };
