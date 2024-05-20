function removeCoveredIntervals(intervals: number[][]): number {
  const n = intervals.length;

  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });

  let deleteCount = 0;

  let i = 0;
  while (i < n) {
    const [c, d] = intervals[i];

    let j = i + 1;
    while (j < n && c <= intervals[j][0] && intervals[j][1] <= d) {
      j++;
    }

    deleteCount += j - i - 1;
    i = j;
  }

  return n - deleteCount;
}

export { removeCoveredIntervals };
