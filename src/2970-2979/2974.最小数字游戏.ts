function numberGame(nums: number[]): number[] {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const ans = new Array(n);
  for (let i = 0; i < n; i += 2) {
    const a = nums[i];
    const b = nums[i + 1];

    ans[i] = b;
    ans[i + 1] = a;
  }

  return ans;
}

export { numberGame };
