function countPoints(points: number[][], queries: number[][]): number[] {
  const m = points.length;
  const n = queries.length;

  const ans = new Array<number>(n).fill(0);

  for (let i = 0; i < n; ++i) {
    const [cx, cy, cr] = queries[i];

    for (let j = 0; j < m; ++j) {
      const [px, py] = points[j];
      // 判断一个点(px, py)在不在圆(cx, cy, cr)内公式为 (cx - px)² + (cy - py)² <= cr²
      if ((cx - px) ** 2 + (cy - py) ** 2 <= cr ** 2) {
        ans[i]++;
      }
    }
  }

  return ans;
}

export { countPoints };
