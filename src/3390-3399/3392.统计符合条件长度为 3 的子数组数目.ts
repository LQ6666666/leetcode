function countSubarrays(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] + nums[i + 2] === nums[i + 1] / 2) {
      ans++;
    }
  }
  return ans;
}

export { countSubarrays };
