function majorityElement(nums: number[]): number {
  const n = nums.length;
  const map = new Map<number, number>();
  const target = Math.floor(n / 2);
  for (const num of nums) {
    let count = (map.get(num) ?? 0) + 1;
    if (count > target) {
      return num;
    }
    map.set(num, count);
  }
  return -1;
}

export {};
