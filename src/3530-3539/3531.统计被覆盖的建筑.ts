function countCoveredBuildings(n: number, buildings: number[][]): number {
  const rowMin = new Array<number>(n + 1).fill(Number.MAX_SAFE_INTEGER);
  const rowMax = new Array<number>(n + 1).fill(Number.MIN_SAFE_INTEGER);
  const colMin = new Array<number>(n + 1).fill(Number.MAX_SAFE_INTEGER);
  const colMax = new Array<number>(n + 1).fill(Number.MIN_SAFE_INTEGER);

  for (const [x, y] of buildings) {
    rowMin[y] = Math.min(rowMin[y], x);
    rowMax[y] = Math.max(rowMax[y], x);
    colMin[x] = Math.min(colMin[x], y);
    colMax[x] = Math.max(colMax[x], y);
  }

  let ans = 0;
  for (const [x, y] of buildings) {
    if (rowMin[y] < x && x < rowMax[y] && colMin[x] < y && y < colMax[x]) {
      ans++;
    }
  }
  return ans;
}

export {};
