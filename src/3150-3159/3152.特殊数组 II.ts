function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const n = nums.length;
  const prefixSum = new Array<number>(n);
  prefixSum[0] = 0;

  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + (nums[i - 1] % 2 === nums[i] % 2 ? 1 : 0);
  }

  const m = queries.length;
  const ans = new Array<boolean>(m);
  for (let i = 0; i < m; i++) {
    const [l, r] = queries[i];
    ans[i] = prefixSum[l] === prefixSum[r];
  }

  return ans;
}

export { isArraySpecial };
