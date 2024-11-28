function maxArrayValue(nums: number[]): number {
  let ans = nums[0];
  const n = nums.length;

  for (let i = n - 1; i > 0; i--) {
    if (nums[i] >= nums[i - 1]) {
      nums[i - 1] += nums[i];
      ans = Math.max(ans, nums[i - 1]);
    }
  }

  return ans;
}

export { maxArrayValue };
