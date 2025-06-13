function subarraySum(nums: number[]): number {
  const n = nums.length;
  const prefixSum = new Array<number>(n + 1);
  prefixSum[0] = 0;

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = nums[i] + prefixSum[i];
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const start = Math.max(0, i - nums[i]);
    ans += prefixSum[i + 1] - prefixSum[start];
  }

  return ans;
}

export { subarraySum };
