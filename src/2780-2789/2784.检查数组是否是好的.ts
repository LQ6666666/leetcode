function isGood(nums: number[]): boolean {
  const n = nums.length - 1;
  nums.sort((a, b) => a - b);
  if (nums[n] !== n || nums[n - 1] !== n) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return false;
    }
  }
  return true;
}

export { isGood };
