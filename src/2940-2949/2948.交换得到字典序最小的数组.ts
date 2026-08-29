function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
  const n = nums.length;
  const pos = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    pos[i] = i;
  }
  pos.sort((a, b) => nums[a] - nums[b]);

  const ans = new Array<number>(n);
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (i === n - 1 || nums[pos[i + 1]] - nums[pos[i]] > limit) {
      const subPos = pos.slice(start, i + 1);
      subPos.sort((a, b) => a - b);
      for (let j = 0; j < subPos.length; j++) {
        ans[subPos[j]] = nums[pos[start + j]];
      }
      start = i + 1;
    }
  }
  return ans;
}

export {};
