const Direction: number[][] = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];

function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length;
  const n = maze[0].length;
  let queue: number[][] = [entrance];

  let count = 0;
  while (queue.length > 0) {
    const newQueue: number[][] = [];
    for (const [row, col] of queue) {
      if (maze[row][col] === ".") {
        if (
          !(row === entrance[0] && col === entrance[1]) &&
          (row === 0 || row === m - 1 || col === 0 || col === n - 1)
        ) {
          return count;
        }

        maze[row][col] = "+";

        for (const [dr, dc] of Direction) {
          const nr = row + dr;
          const nc = col + dc;
          if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
            newQueue.push([nr, nc]);
          }
        }
      }
    }

    count++;
    queue = newQueue;
  }

  return -1;
}

export { nearestExit };
