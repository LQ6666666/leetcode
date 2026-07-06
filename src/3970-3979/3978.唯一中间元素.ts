function isMiddleElementUnique(nums: number[]): boolean {
  const n = nums.length;
  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }
  return map.get(Math.floor(n / 2))! === 1;
}

export {};
