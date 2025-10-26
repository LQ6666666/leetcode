function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n = nums.length;
  const prefixSum = new Array<number>(n + 1);
  prefixSum[0] = 0;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  const ans = new Array<number>(n).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i] * i - prefixSum[i];
    const right = prefixSum[n] - prefixSum[i] - nums[i] * (n - i);
    ans[i] = left + right;
  }
  return ans;
}

export { getSumAbsoluteDifferences };
