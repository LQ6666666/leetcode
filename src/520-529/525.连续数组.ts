function findMaxLength(nums: number[]): number {
  const n = nums.length;
  const prefixSum = new Array<number>(n + 1);
  prefixSum[0] = 0;

  for (let i = 0; i < n; i++) {
    // 把 0 当作 -1
    const x = nums[i] == 0 ? -1 : 1;
    prefixSum[i + 1] = prefixSum[i] + x;
  }

  const map = new Map<number, number>();
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    const x = prefixSum[i];
    if (map.has(x)) {
      ans = Math.max(i - map.get(x)!, ans);
    } else {
      map.set(x, i);
    }
  }

  return ans;
}

export { findMaxLength };
