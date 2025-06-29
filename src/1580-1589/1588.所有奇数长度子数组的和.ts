function sumOddLengthSubarrays(arr: number[]): number {
  const n = arr.length;
  let ans = 0;

  const prefixSum = new Array<number>(n + 1);
  prefixSum[0] = 0;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = arr[i] + prefixSum[i];
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j += 2) {
      ans += prefixSum[j] - prefixSum[i];
    }
  }

  return ans;
}

export { sumOddLengthSubarrays };
