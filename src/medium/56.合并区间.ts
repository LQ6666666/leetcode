function merge$(intervals: number[][]): number[][] {
  // 1. 排序
  intervals.sort((a, b) => a[0] - b[0]);

  const ans: number[][] = [];
  ans.push([...intervals[0]]);

  for (let i = 1; i < intervals.length; i++) {
    const item = intervals[i];
    const last = ans[ans.length - 1];

    if (last[1] >= item[0]) {
      if (item[1] > last[1]) {
        last[1] = item[1];
      }
    } else {
      ans.push([...item]);
    }
  }

  return ans;
}

function merge(intervals: number[][]): number[][] {
  const n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  const ans: number[][] = [];
  ans.push(intervals[0].slice());

  for (let i = 1; i < n; i++) {
    const current = intervals[i];
    const last = ans.at(-1)!;
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      ans.push(current.slice());
    }
  }

  return ans;
}

export { merge };
