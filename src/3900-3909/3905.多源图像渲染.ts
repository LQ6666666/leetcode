const DIRS = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0]
];

function colorGrid(n: number, m: number, sources: number[][]): number[][] {
  const ans = Array.from({ length: n }, () => new Array<number>(m).fill(0));
  sources.sort((a, b) => b[2] - a[2]);

  let queue: [row: number, col: number][] = [];
  for (const [row, col, color] of sources) {
    ans[row][col] = color;
    queue.push([row, col]);
  }

  while (queue.length) {
    const newQueue: [row: number, col: number][] = [];
    for (const [row, col] of queue) {
      const color = ans[row][col];
      for (const [i, j] of DIRS) {
        const x = i + row;
        const y = j + col;
        if (0 <= x && x < n && 0 <= y && y < m && ans[x][y] === 0) {
          ans[x][y] = color;
          newQueue.push([x, y]);
        }
      }
    }
    queue = newQueue;
  }

  return ans;
}

export {};
