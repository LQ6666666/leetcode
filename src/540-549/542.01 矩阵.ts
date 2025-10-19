type Pos = [r: number, c: number];

const dirs: Pos[] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
];

function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  const ans = Array.from({ length: m }, () => new Array<number>(n));
  const seen = Array.from({ length: m }, () => new Array<0 | 1>(n).fill(0));
  let queue: [r: number, c: number][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        ans[i][j] = 0;
        seen[i][j] = 1;
      }
    }
  }

  let dist = 1;
  while (queue.length) {
    const newQueue: [r: number, c: number][] = [];
    for (const [r, c] of queue) {
      for (const [dr, dc] of dirs) {
        const i = r + dr;
        const j = dc + c;
        if (i < m && j < n && i >= 0 && j >= 0 && seen[i][j] === 0) {
          ans[i][j] = dist;
          newQueue.push([i, j]);
          seen[i][j] = 1;
        }
      }
    }

    dist++;
    queue = newQueue;
  }

  return ans;
}

export { updateMatrix };
