function minTimeToVisitAllPoints(points: number[][]): number {
  const n = points.length;

  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans += Math.max(
      Math.abs(points[i][0] - points[i - 1][0]),
      Math.abs(points[i][1] - points[i - 1][1])
    );
  }

  return ans;
}

export {};
