function findMinArrowShots(points: number[][]): number {
  // 按照右端点从小到大排序
  points.sort((a, b) => a[1] - b[1]);
  let ans = 0;
  let pre = Number.MIN_SAFE_INTEGER;
  for (const [start, end] of points) {
    if (start > pre) {
      // 上一个放的点在区间左边
      ans++;
      // 在区间的最右边放一个点
      pre = end;
    }
  }
  return ans;
}

export { findMinArrowShots };
