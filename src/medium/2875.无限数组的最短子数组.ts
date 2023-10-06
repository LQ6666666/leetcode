function minSizeSubarray(nums: number[], target: number): number {
  const total = nums.reduce((acc, num) => acc + num, 0);
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < n * 2; right++) {
    sum += nums[right % n];
    while (sum > target % total) {
      sum -= nums[left++ % n];
    }

    if (sum === target % total) {
      ans = Math.min(ans, right - left + 1);
    }
  }

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans + Math.floor(target / total) * n;
}

export { minSizeSubarray };
