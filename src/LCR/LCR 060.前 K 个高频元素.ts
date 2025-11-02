function topKFrequent(nums: number[], k: number): number[] {
  const n = nums.length;

  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const ans: number[] = [];

  const keys = Array.from(map.keys());
  keys.sort((a, b) => map.get(b)! - map.get(a)!);
  return keys.slice(0, k);
}

export { topKFrequent };
