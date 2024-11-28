function minOperations(nums: number[], x: number): number {
  // 找到最长的连续子数组
  const target = nums.reduce((prev, cur) => prev + cur) - x;
  const n = nums.length;

  let ans = n + 1;
  let current = 0;
  let left = 0,
    right = 0;
  while (left < n) {
    while (right < n && target > current) {
      current += nums[right++];
    }

    if (current === target) {
      ans = Math.min(ans, n + left - right);
    }

    current -= nums[left++];
  }

  return ans > n ? -1 : ans;
}


export { minOperations };
