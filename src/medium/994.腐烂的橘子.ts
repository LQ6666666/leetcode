const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1]
];

function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;

  let fresh = 0;
  let count = 0;
  let queue: [row: number, col: number][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  while (queue.length && fresh !== 0) {
    count++;
    const newQueue: [row: number, col: number][] = [];
    for (const [row1, col1] of queue) {
      for (const [row2, col2] of directions) {
        const row = row1 + row2;
        const col = col1 + col2;
        if (row >= 0 && row < m && col >= 0 && col < n && grid[row][col] === 1) {
          newQueue.push([row, col]);
          grid[row][col] = 2;
          fresh--;
        }
      }
    }
    queue = newQueue;
  }

  return fresh === 0 ? count : -1;
}

export { orangesRotting };
