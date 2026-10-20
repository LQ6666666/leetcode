function minDeletions(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] === nums[i]) {
      ans++;
    }
  }
  return ans;
}

export {};
