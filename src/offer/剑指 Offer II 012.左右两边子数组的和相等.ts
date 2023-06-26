function pivotIndex(nums: number[]): number {
  const n = nums.length;
  let rightSum = 0,
    leftSum = 0;
  for (const num of nums) {
    rightSum += num;
  }

  for (let i = 0; i < n; i++) {
    rightSum -= nums[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}

export { pivotIndex };
