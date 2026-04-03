function minAbsoluteDifference(nums: number[]): number {
  const n = nums.length;
  let ans = n;
  for (let i = 0, j = -1; i < n; i++) {
    if (nums[i] == 0) continue;
    if (j >= 0 && nums[j] != nums[i]) {
      ans = Math.min(ans, i - j);
    }
    j = i;
  }
  return ans < n ? ans : -1;
}

export {};
