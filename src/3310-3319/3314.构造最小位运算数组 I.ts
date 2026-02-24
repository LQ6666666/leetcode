function minBitwiseArray(nums: number[]): number[] {
  const n = nums.length;

  const ans = new Array<number>(n).fill(-1);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    for (let j = 1; j < num; j++) {
      if ((j | (j + 1)) === num) {
        ans[i] = j;
        break;
      }
    }
  }

  return ans;
}

export {};
