function insert$(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length;
  let index = 0;
  const result: number[][] = [];
  // 找到需要合并的区间
  while (index < n && intervals[index][1] < newInterval[0]) {
    result.push(intervals[index++]);
  }

  // 合并区间
  while (index < n && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[index][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[index][1], newInterval[1]);
    index++;
  }

  result.push(newInterval);
  while (index < n) {
    result.push(intervals[index++]);
  }
  return result;
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const n = intervals.length;
  let index = 0;
  const result: number[][] = [];
  while (index < n && intervals[index][1] < newInterval[0]) {
    result.push(intervals[index++]);
  }

  while (index < n && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[index][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[index][1], newInterval[1]);
    index++;
  }

  result.push(newInterval);
  while (index < n) {
    result.push(intervals[index++]);
  }
  return result;
}

export {};
