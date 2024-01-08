function numberOfBoomerangs(points: number[][]): number {
  // 两个点 i,j 的欧式距离的平方为
  // d2 = (x1 - x2) ** 2 + (y1 - y2) ** 2
  let ans: number = 0;
  const map = new Map<number, number>();

  for (const [x1, y1] of points) {
    map.clear();
    for (const [x2, y2] of points) {
      const dis = (x1 - x2) ** 2 + (y1 - y2) ** 2;
      map.set(dis, (map.get(dis) ?? 0) + 1);
    }

    map.forEach(m => {
      ans += m * (m - 1);
    });
  }

  return ans;
}

export { numberOfBoomerangs };
