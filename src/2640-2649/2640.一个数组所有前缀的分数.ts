function findPrefixScore(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n).fill(0);

  let max = nums[0];
  for (let i = 0; i < n; i++) {
    max = Math.max(nums[i], max);
    ans[i] = nums[i] + max;

    if (i !== 0) {
      ans[i] += ans[i - 1];
    }
  }

  return ans;
}

export {};
