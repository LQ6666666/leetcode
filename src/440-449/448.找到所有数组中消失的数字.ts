function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;
  // [1, n] 就是数组的范围

  for (let i = 0; i < n; i++) {
    const item = Math.abs(nums[i]);
    nums[item - 1] = -Math.abs(nums[item - 1]);
  }

  const ans: number[] = [];
  for (let i = 0; i < n; i++) {
    const item = nums[i];
    if (item > 0) {
      ans.push(i + 1);
    }
  }

  return ans;
}

export { findDisappearedNumbers };
