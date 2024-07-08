function pivotIndex(nums: number[]): number {
  const total = nums.reduce((prev, cur) => prev + cur, 0);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + sum * 2 === total) {
      return i;
    }

    sum += nums[i];
  }

  return -1;
}

export { pivotIndex };
