function maximumUniqueSubarray(nums: number[]): number {
  const n = nums.length;
  let ans = nums[0];
  let sum = 0;
  const set = new Set<number>();
  for (let i = 0, j = 0; j < n; j++) {
    while (set.has(nums[j])) {
      set.delete(nums[i]);
      sum -= nums[i];
      i++;
    }

    sum += nums[j];
    set.add(nums[j]);
    ans = Math.max(ans, sum);
  }

  return ans;
}

export { maximumUniqueSubarray };
