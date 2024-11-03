function findLengthOfLCIS(nums: number[]): number {
  const n = nums.length;
  let ans = 1;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      count++;
    } else {
      count = 1;
    }
    ans = Math.max(ans, count);
  }

  return ans;
}

export { findLengthOfLCIS };
