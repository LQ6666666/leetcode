function longestSubarray(nums: number[]): number {
  const n = nums.length;
  let ans = 2;
  let l = 2;

  for (let i = 2; i < n; i++) {
    if (nums[i] === nums[i - 1] + nums[i - 2]) {
      l++;
    } else {
      l = 2;
    }
    ans = Math.max(l, ans);
  }

  return ans;
}

export {};
