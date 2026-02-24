function waysToMakeFair(nums: number[]): number {
  const n = nums.length;
  const oddPrefixSum = new Array<number>(n + 1);
  const evenPrefixSum = new Array<number>(n + 1);
  oddPrefixSum[0] = 0;
  evenPrefixSum[0] = 0;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (i % 2 === 0) {
      oddPrefixSum[i + 1] = oddPrefixSum[i];
      evenPrefixSum[i + 1] = evenPrefixSum[i] + num;
    } else {
      oddPrefixSum[i + 1] = oddPrefixSum[i] + num;
      evenPrefixSum[i + 1] = evenPrefixSum[i];
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const o = oddPrefixSum[i] + evenPrefixSum[n] - evenPrefixSum[i + 1];
    const e = evenPrefixSum[i] + oddPrefixSum[n] - oddPrefixSum[i + 1];
    if (o === e) {
      ans++;
    }
  }

  return ans;
}

export {};
