function centeredSubarrays(nums: number[]): number {
  const n = nums.length;
  const set = new Set<number>();
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    set.clear();
    for (let j = i; j < n; j++) {
      set.add(nums[j]);
      sum += nums[j];
      if (set.has(sum)) {
        ans++;
      }
    }
  }

  return ans;
}

export {};
