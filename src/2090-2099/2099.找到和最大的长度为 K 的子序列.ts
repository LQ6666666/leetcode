function maxSubsequence(nums: number[], k: number): number[] {
  const recordNums: [number, number][] = nums.map((num, index) => [num, index]);
  recordNums.sort((a, b) => b[0] - a[0]);
  const left = recordNums.slice(0, k);
  left.sort((a, b) => a[1] - b[1]);
  const ans = left.map(([num]) => num);
  return ans;
}

export { maxSubsequence };
