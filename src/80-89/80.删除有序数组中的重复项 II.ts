function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  let index = 2;
  for (let i = 2; i < n; i++) {
    if (nums[i] !== nums[index - 2]) {
      nums[index++] = nums[i];
    }
  }

  return index;
}

export {};
