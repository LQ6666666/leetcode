function minOperations(nums: number[], k: number): number {
  // 所有数异或后, 统计数位中 1 的个数
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    k ^= nums[i];
  }

  let ans = 0;

  while (k) {
    if ((k & 1) === 1) {
      ans++;
    }
    k >>= 1;
  }

  return ans;
}

export { minOperations };
