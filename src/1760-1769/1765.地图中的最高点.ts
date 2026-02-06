function highestPeak(isWater: number[][]): number[][] {
  const m = isWater.length;
  const n = isWater[0].length;

  const ans = Array.from({ length: m }, () => new Array<number>(n));
  const seen = Array.from({ length: m }, () => new Array<0 | 1>(n).fill(0));
  let queue: [row: number, col: number][] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j]) {
        queue.push([i, j]);
        ans[i][j] = 0;
        seen[i][j] = 1;
      }
    }
  }

  let h = 1;
  while (queue.length) {
    const newQueue: [row: number, col: number][] = [];
    for (const [row, col] of queue) {
      for (const [r, c] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
      ]) {
        const dr = row + r;
        const dl = col + c;
        if (dr >= 0 && dr < m && dl >= 0 && dl < n && seen[dr][dl] === 0) {
          ans[dr][dl] = h;
          newQueue.push([dr, dl]);
          seen[dr][dl] = 1;
        }
      }
    }
    h++;
    queue = newQueue;
  }

  return ans;
}

export {};
