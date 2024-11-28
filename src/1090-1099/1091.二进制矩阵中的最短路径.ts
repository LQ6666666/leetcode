const directions = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1]
];

function shortestPathBinaryMatrix(grid: number[][]): number {
  if (grid[0][0] === 1) return -1;

  const n = grid.length;
  let queue: [number, number][] = [[0, 0]];
  let ans = 1;

  while (queue.length) {
    const newQueue: [number, number][] = [];

    for (const [x, y] of queue) {
      if (x === y && x === n - 1) return ans;

      for (const [dx, dy] of directions) {
        const a = x + dx;
        const b = y + dy;

        if (a >= 0 && b >= 0 && a < n && b < n && grid[a][b] === 0) {
          newQueue.push([a, b]);
          grid[a][b] = 1;
        }
      }
    }

    ans++;
    queue = newQueue;
  }

  return -1;
}

// [
//   [0, 0, 0],
//   [1, 1, 0],
//   [1, 1, 1]
// ];

export { shortestPathBinaryMatrix };
