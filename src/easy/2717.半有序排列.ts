function semiOrderedPermutation(nums: number[]): number {
  const n = nums.length;
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (startIndex !== -1 && endIndex !== -1) {
      break;
    }

    if (nums[i] === 1) {
      startIndex = i;
    } else if (nums[i] === n) {
      endIndex = i;
    }
  }

  return startIndex + n - 1 - endIndex - (startIndex > endIndex ? 1 : 0);
}

export { semiOrderedPermutation };
