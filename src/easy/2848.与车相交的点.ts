function numberOfPoints$(nums: [start: number, end: number][]): number {
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

function numberOfPoints(nums: [start: number, end: number][]): number {
  // 注意下面有 end + 1
  const arr = new Array<number>(100 + 1 + 1).fill(0);

  for (const [start, end] of nums) {
    arr[start]++;
    arr[end + 1]--;
  }

  let ans = 0;
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += arr[i];
    if (sum > 0) {
      ans++;
    }
  }
  return ans;
}

export { numberOfPoints };
