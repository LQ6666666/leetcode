function transformArray(nums: number[]): number[] {
  const n = nums.length;

  let even = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      even++;
    }
  }

  const ans = new Array<number>(n);
  for (let i = 0; i < even; i++) {
    ans[i] = 0;
  }

  for (let i = even; i < n; i++) {
    ans[i] = 1;
  }

  return ans;
}

export { transformArray };
