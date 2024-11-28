function minRectanglesToCoverPoints(points: number[][], w: number): number {
  const n = points.length;
  points.sort((a, b) => a[0] - b[0]);
  let ans = 0;

  let start = points[0][0];
  for (let i = 0; i < n; i++) {
    const end = points[i][0];
    if (end - start > w) {
      start = end;
      ans++;
    }
  }

  return ans + 1;
}

export { minRectanglesToCoverPoints };
