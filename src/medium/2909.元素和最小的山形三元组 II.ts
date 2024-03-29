function minimumSum(nums: number[]): number {
  const n = nums.length;
  // 后缀和
  const suffix: number[] = new Array<number>(n).fill(0);
  suffix[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = Math.min(nums[i], suffix[i + 1]);
  }

  // 前缀和
  const prefix: number[] = new Array<number>(n).fill(0);
  prefix[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = Math.min(nums[i], prefix[i - 1]);
  }

  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (prefix[i] < nums[i] && suffix[i] < nums[i]) {
      ans = Math.min(prefix[i] + nums[i] + suffix[i], ans);
    }
  }

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

export {};
