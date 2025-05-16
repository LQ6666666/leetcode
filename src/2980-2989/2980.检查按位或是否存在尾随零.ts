function hasTrailingZeros(nums: number[]): boolean {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if ((nums[i] & 1) === 0) {
      count++;
    }
    if (count === 2) {
      return true;
    }
  }
  return false;
}

export { hasTrailingZeros };
