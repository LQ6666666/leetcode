// 暴力-过不去
function minimumEffortPath$(heights: number[][]): number {
  const m = heights.length;
  const n = heights[0].length;
  if (m === 1 && n === 1) return 0;

  const visits = Array.from({ length: m }, () => new Array<boolean>().fill(false));
  let ans = Number.MAX_SAFE_INTEGER;
  dfs(0, 0, Number.MIN_SAFE_INTEGER);
  return ans;

  function dfs(i: number, j: number, maxDiff: number): void {
    visits[i][j] = true;

    if (i === m - 1 && j === n - 1) {
      ans = Math.min(maxDiff, ans);
      return;
    }

    const value = heights[i][j];

    for (const [x, y] of directions) {
      const dx = x + i;
      const dy = y + j;
      if (dx < 0 || dx >= m || dy < 0 || dy >= n) continue;
      if (visits[dx][dy]) continue;

      const diff = Math.abs(heights[dx][dy] - value);
      dfs(dx, dy, Math.max(diff, maxDiff));

      visits[dx][dy] = false;
    }
  }
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
];

function minimumEffortPath(heights: number[][]): number {
  const m = heights.length;
  const n = heights[0].length;

  let left = 0;
  let right = 999999;
  let ans = 0;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);

    const queue: [number, number][] = [[0, 0]];
    const seen = Array.from({ length: m }, () => new Array<number>(n).fill(0));
    seen[0][0] = 1;

    while (queue.length) {
      const [x, y] = queue.shift()!;

      for (let i = 0; i < 4; i++) {
        const nx = x + directions[i][0];
        const ny = y + directions[i][1];

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        if (seen[nx][ny]) continue;

        if (Math.abs(heights[x][y] - heights[nx][ny]) <= mid) {
          queue.push([nx, ny]);
          seen[nx][ny] = 1;
        }
      }
    }

    if (seen[m - 1][n - 1]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}

console.log(
  minimumEffortPath([
    [4, 3, 4, 10, 5, 5, 9, 2],
    [10, 8, 2, 10, 9, 7, 5, 6],
    [5, 8, 10, 10, 10, 7, 4, 2],
    [5, 1, 3, 1, 1, 3, 1, 9],
    [6, 4, 10, 6, 10, 9, 4, 6]
  ])
);

export {};
