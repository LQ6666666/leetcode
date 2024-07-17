function countDays(days: number, meetings: number[][]): number {
  // 合并区间
  meetings.sort(([a], [b]) => a - b);

  // 当前合并区间的左右端点
  let start = 1,
    end = 0;
  const n = meetings.length;
  let max = 0;
  for (const p of meetings) {
    if (p[0] > end) {
      // 不相交
      // 当前合并区间的长度
      days -= end - start + 1;
      // 下一个合并区间的左端点
      start = p[0];
    }
    end = Math.max(end, p[1]);
  }
  // 最后一个合并区间的长度
  days -= end - start + 1;
  return days;
}

export { countDays };
