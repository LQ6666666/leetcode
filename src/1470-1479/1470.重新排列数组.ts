function shuffle(nums: number[], n: number): number[] {
  const ans = new Array<number>(n * 2);
  for (let i = 0; i < n; i++) {
    ans[i * 2] = nums[i];
    ans[i * 2 + 1] = nums[n + i];
  }
  return ans;
}

export {};
