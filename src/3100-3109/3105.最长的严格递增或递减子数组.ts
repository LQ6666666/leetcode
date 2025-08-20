function longestMonotonicSubarray(nums: number[]): number {
  const n = nums.length;
  let length = 1;
  let ans = length;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      length++;
    } else {
      length = 1;
    }
    ans = Math.max(ans, length);
  }

  length = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      length++;
    } else {
      length = 1;
    }
    ans = Math.max(ans, length);
  }

  return ans;
}

export { longestMonotonicSubarray };
