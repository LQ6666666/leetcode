function findSubarrays(nums: number[]): boolean {
  const n = nums.length;
  const set = new Set<number>();

  set.add(nums[0] + nums[1]);

  for (let i = 1; i < n; i++) {
    const sum = nums[i] + nums[i + 1];

    if (set.has(sum)) {
      return true;
    } else {
      set.add(sum);
    }
  }

  return false;
};
