function getConcatenation(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n * 2);
  for (let i = 0; i < n; i++) {
    ans[i] = ans[n + i] = nums[i];
  }
  return ans;
}

export { getConcatenation };
