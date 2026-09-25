function isIdealPermutation(nums: number[]): boolean {
  let n = nums.length;
  let minSuff = nums[n - 1];
  for (let i = n - 3; i >= 0; i--) {
    if (nums[i] > minSuff) {
      return false;
    }
    minSuff = Math.min(minSuff, nums[i + 1]);
  }
  return true;
}
