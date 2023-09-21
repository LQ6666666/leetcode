function sumIndicesWithKSetBits(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let count = 0;
    let x = i;
    while (x > 0) {
      count += x & 1;
      x >>= 1;
    }
    if (count === k) {
      ans += nums[i];
    }
  }

  return ans;
}

export {};
