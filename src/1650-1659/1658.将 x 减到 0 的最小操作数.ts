function minOperations(nums: number[], x: number): number {
  const n = nums.length;
  // 找到最长的连续子数组
  const target = nums.reduce((prev, cur) => prev + cur) - x;

  let ans = n + 1;
  let sum = 0;
  for (let i = 0, j = 0; j < n; j++) {
    sum += nums[j];

    while (i < n && sum > target) {
      sum -= nums[i++];
    }

    if (target === sum) {
      ans = Math.min(ans, n - (j - i + 1));
    }
  }

  return ans > n ? -1 : ans;
}

export { minOperations };
