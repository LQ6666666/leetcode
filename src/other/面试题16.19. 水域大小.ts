const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];

function pondSizes(land: number[][]): number[] {
  const m = land.length;
  const n = land[0].length;

  const ans: number[] = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 0) {
        ans.push(dfs(i, j));
      }
    }
  }

  return ans.sort((a, b) => a - b);

  function dfs(i: number, j: number): number {
    if (i < 0 || i >= m || j < 0 || j >= n) return 0;
    if (land[i][j] !== 0) return 0;
    land[i][j] = -1;
    let count = 1;
    for (const [x, y] of directions) {
      count += dfs(i + x, j + y);
    }
    return count;
  }
}
export { pondSizes };
