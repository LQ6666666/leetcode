function findMaxK(nums: number[]): number {
  const set = new Set<number>();

  let ans = -1;
  for (const num of nums) {
    if (set.has(-num)) {
      ans = Math.max(ans, Math.abs(num));
    }

    set.add(num);
  }

  return ans;
}

export { findMaxK };
