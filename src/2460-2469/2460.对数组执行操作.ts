function applyOperations(nums: number[]): number[] {
  const n = nums.length;
  for (let i = 0, j = 1; j < n; i++, j++) {
    if (nums[i] === nums[j]) {
      nums[i] = nums[i] << 1;
      nums[j] = 0;
    }
  }

  const ans = new Array(n).fill(0);

  for (let i = 0, idx = 0; i < n; i++) {
    const item = nums[i];
    if (item) {
      ans[idx++] = item;
    }
  }

  return ans;
}

export { applyOperations };
