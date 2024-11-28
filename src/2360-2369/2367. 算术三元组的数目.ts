function $arithmeticTriplets(nums: number[], diff: number): number {
  const n = nums.length;
  let ans = 0;

  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < n - 2; i++) {
    const num = nums[i];

    const bIndex = map.get(num + diff) ?? -1;
    if (bIndex > i) {
      const cIndex = map.get(num + diff * 2) ?? -1;
      if (cIndex > bIndex) {
        ans++;
      }
    }
  }

  return ans;
}

function arithmeticTriplets(nums: number[], diff: number): number {
  const set = new Set(nums);
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const t1 = num - diff;
    const t2 = num + diff;
    if (set.has(t1) && set.has(t2)) {
      ans++;
    }
  }
  return ans;
}
export {};

