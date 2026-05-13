function concatWithReverse(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n * 2);

  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[n - i - 1];
  }

  return ans;
}

export {};
