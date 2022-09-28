function buildArray(nums: number[]): number[] {
  const size = nums.length;

  const ans = new Array<number>(size);

  for (let i = 0; i < size; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans;
};

export { buildArray };
