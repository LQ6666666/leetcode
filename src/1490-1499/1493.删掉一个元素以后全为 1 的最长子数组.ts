function longestSubarray(nums: number[]): number {
  const n = nums.length;

  let ans = 0;
  let count = 0;
  for (let i = 0, j = 0; j < n; j++) {
    if (nums[j] === 0) {
      count++;
    }

    while (count > 1) {
      if (nums[i] === 0) {
        count--;
      }
      i++;
    }

    ans = Math.max(j - i, ans);
  }

  return ans;
}

export { longestSubarray };
