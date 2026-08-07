function maximumScore(nums: number[]): number {
  const n = nums.length;
  const prefixSum = new Array<number>(n);
  prefixSum[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  const suffixMin = new Array<number>(n);
  suffixMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
  }

  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n - 1; i++) {
    ans = Math.max(prefixSum[i] - suffixMin[i + 1], ans);
  }
  return ans;
}

export {};
