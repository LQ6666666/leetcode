function maximumStrongPairXor(nums: number[]): number {
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const x = nums[i];
      const y = nums[j];
      if (Math.abs(x - y) <= Math.min(x, y)) {
        ans = Math.max(ans, x ^ y);
      }
    }
  }
  return ans;
}

export { maximumStrongPairXor };
