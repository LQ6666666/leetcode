function resultsArray(nums: number[], k: number): number[] {
  const n = nums.length;
  const ans = new Array<number>(n - k + 1).fill(-1);
  if (k === 1) {
    ans[0] = nums[0];
  }
  let i = 0;
  let j = 1;
  while (j < n) {
    if (nums[j - 1] + 1 !== nums[j]) {
      i = j;
    }

    if (j - i + 1 >= k) {
      ans[j - k + 1] = nums[j];
    }
    j++;
  }

  return ans;
}

export {};
