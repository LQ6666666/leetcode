function minBitwiseArray(nums: number[]): number[] {
  const n = nums.length;

  const ans = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    const x = nums[i];
    if (x === 2) {
      ans[i] = -1;
    } else {
      const t = ~x;
      const lowbit = t & -t;
      ans[i] = x ^ (lowbit >> 1);
    }
  }

  return ans;
}

export {};
