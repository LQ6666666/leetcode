function minMoves(nums: number[]): number {
  const max = Math.max(...nums);
  let ans = 0;
  for (const num of nums) {
    ans += max - num;
  }
  return ans;
}

export { minMoves };
