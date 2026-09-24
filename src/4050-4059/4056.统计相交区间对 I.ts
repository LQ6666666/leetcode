function countIntersectingIntervals(intervals: number[][]): number {
  const n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (intervals[j][0] < intervals[i][1]) {
        ans++;
      }
    }
  }

  return ans;
}

export {};
