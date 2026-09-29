function rearrangeArray(nums: number[]): number[] {
  const n = nums.length;
  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const ans: number[] = [];
  while (map.size) {
    const keys = Array.from(map.keys());
    keys.sort((a, b) => a - b);

    for (const key of keys) {
      ans.push(key);
      let count = map.get(key)!;
      count--;
      if (count === 0) {
        map.delete(key);
      } else {
        map.set(key, count);
      }
    }
  }
  return ans;
}

export {};
