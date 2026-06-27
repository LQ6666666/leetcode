function minimumIndex(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number>();
  let target = 0;
  let targetNum = 0;
  for (let i = 0; i < n; i++) {
    const count = (map.get(nums[i]) ?? 0) + 1;
    map.set(nums[i], count);
    if (count * 2 > nums.length) {
      target = nums[i];
      targetNum = count;
    }
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      count++;
    }
    if (count * 2 > i + 1 && (targetNum - count) * 2 > n - i - 1) {
      return i;
    }
  }
  return -1;
}

export {};
