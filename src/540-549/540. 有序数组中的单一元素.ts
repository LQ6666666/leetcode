function singleNonDuplicate(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (middle % 2 === 0) {
      if (nums[middle] === nums[middle + 1]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if (nums[middle] === nums[middle - 1]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return nums[left];
}

export { singleNonDuplicate };

export {};
