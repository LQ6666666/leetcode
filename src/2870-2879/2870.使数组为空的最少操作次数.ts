function minOperations(nums: number[]): number {
  const n = nums.length;

  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  let ans = 0;
  const values = Array.from(map.values());
  for (const count of values) {
    if (count === 1) return -1;

    if (count % 3 === 0) {
      ans += Math.floor(count / 3);
    } else {
      ans += Math.floor(count / 3) + 1;
    }
  }

  return ans;
}

export { minOperations };
