function maximumSubarraySum(nums: number[], k: number): number {
  const n = nums.length;
  const set = new Set<number>();
  let left = 0,
    right = 0;

  let ans = 0,
    sum = 0;

  while (right < n) {
    while (set.has(nums[right])) {
      set.delete(nums[left]);
      sum -= nums[left++];
    }

    set.add(nums[right]);
    sum += nums[right];

    if (right - left + 1 === k) {
      ans = Math.max(ans, sum);
      set.delete(nums[left]);
      sum -= nums[left++];
    }
    right++;
  }

  return ans;
}

export { maximumSubarraySum };
