function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let ans = 0;

  const n = nums.length;
  for (let i = 1; i < n; i++) {
    const cur = nums[i];
    const prev = nums[i - 1];

    if (cur <= prev) {
      nums[i] = prev + 1;
      ans += nums[i] - cur;
    }
  }

  return ans;
}

export { minIncrementForUnique };
