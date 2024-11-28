function prefixesDivBy5(nums: number[]): boolean[] {
  const n = nums.length;
  const ans = new Array<boolean>(n);
  let prefix = 0;

  for (let i = 0; i < n; i++) {
    prefix = ((prefix << 1) + nums[i]) % 5;
    ans[i] = prefix === 0;
  }

  return ans;
}

export { prefixesDivBy5 };
