function tupleSameProduct(nums: number[]): number {
  const n = nums.length;
  const cnt = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const key = nums[i] * nums[j];
      cnt.set(key, (cnt.get(key) ?? 0) + 1);
    }
  }

  // 对于乘积结果相同的结果，总共有 (n * (n - 1)) / 2 组
  // 每组又可以形成 8 个答案
  let ans = 0;
  cnt.forEach(value => {
    if (value > 1) {
      ans += (value * (value - 1)) / 2;
    }
  });
  return ans * 8;
}

export { tupleSameProduct };
