function checkSubarraySum(nums: number[], k: number): boolean {
  const n = nums.length;
  const prefixSum = new Array<number>(n + 1);
  prefixSum[0] = 0;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  const set = new Set<number>();
  // 保证子数组长度至少是 2
  for (let i = 2; i <= n; i++) {
    // 将子数组左边
    set.add(prefixSum[i - 2] % k);
    // 子数组右边和左边相同, 那么中间也是相同的
    if (set.has(prefixSum[i] % k)) {
      return true;
    }
  }

  return false;
}

export {};
