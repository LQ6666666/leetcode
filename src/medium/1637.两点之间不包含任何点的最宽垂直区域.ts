function maxWidthOfVerticalArea(points: number[][]): number {
  points.sort(([a], [b]) => a - b);
  const n = points.length;

  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, points[i][0] - points[i - 1][0]);
  }

  return ans;
}

export {};
