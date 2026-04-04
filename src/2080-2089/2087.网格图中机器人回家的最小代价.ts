function minCost(
  startPos: number[],
  homePos: number[],
  rowCosts: number[],
  colCosts: number[]
): number {
  const [x0, y0] = startPos;
  const [x1, y1] = homePos;

  let ans = -rowCosts[x0] - colCosts[y0];

  ans += rowCosts
    .slice(Math.min(x0, x1), Math.max(x0, x1) + 1)
    .reduce((memo, num) => memo + num, 0);

  ans += colCosts
    .slice(Math.min(y0, y1), Math.max(y0, y1) + 1)
    .reduce((memo, num) => memo + num, 0);

  return ans;
}

export {};
