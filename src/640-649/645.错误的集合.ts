function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  const counts = new Array<number>(n + 1).fill(0);

  for (const num of nums) {
    counts[num]++;
  }

  const ans = new Array<number>(2);
  for (let i = 1; i <= n; i++) {
    if (counts[i] === 2) {
      ans[0] = i;
    }
    if (counts[i] === 0) {
      ans[1] = i;
    }
  }
  return ans;
}

export { findErrorNums };
