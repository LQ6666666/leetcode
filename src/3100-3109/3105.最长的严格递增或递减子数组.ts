function longestMonotonicSubarray(nums: number[]): number {
  const n = nums.length;
  let count1 = 1;
  let count2 = 1;
  let ans = count1;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < nums[i]) {
      count1++;
    } else {
      count1 = 1;
    }

    if (nums[i - 1] > nums[i]) {
      count2++;
    } else {
      count2 = 1;
    }

    ans = Math.max(ans, count1, count2);
  }

  return ans;
}

export { longestMonotonicSubarray };
