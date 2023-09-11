function numberOfPoints(nums: [start: number, end: number][]): number {
  // 合并区间
  nums.sort((a, b) => a[0] - b[0]);
  const ranges: [start: number, end: number][] = [nums[0]];

  const n = nums.length;
  for (let i = 1; i < n; i++) {
    const current = nums[i];
    const prev = ranges[ranges.length - 1];
    if (current[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      ranges.push(current);
    }
  }

  let ans = 0;
  for (const [start, end] of ranges) {
    ans += end - start + 1;
  }

  return ans;
}

export { numberOfPoints };
