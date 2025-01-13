function waysToSplitArray(nums: number[]): number {
  const n = nums.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + nums[i - 1];
  }

  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    if (prefix[i + 1] - prefix[0] >= prefix[n] - prefix[i + 1]) {
      ans++;
    }
  }
  return ans;
}

export { waysToSplitArray };
