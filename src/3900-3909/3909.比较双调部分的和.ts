function compareBitonicSums(nums: number[]): number {
  const n = nums.length;

  let left = 0;
  let i = 0;
  for (; i < n; i++) {
    left += nums[i];
    if (nums[i] > nums[i + 1]) {
      break;
    }
  }

  let right = 0;
  for (; i < n; i++) {
    right += nums[i];
  }

  return left === right ? -1 : left > right ? 0 : 1;
}

export {};
