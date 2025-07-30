function longestSubarray(nums: number[]): number {
  const n = nums.length;
  const max = Math.max(...nums);

  let ans = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === max) {
      count++;
      ans = Math.max(ans, count);
    } else {
      count = 0;
    }
  }

  return ans;
}

export { longestSubarray };
