function findPeakElement$(nums: number[]): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (nums[middle] < nums[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

function findPeakElement(nums: number[]): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (nums[middle] < nums[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

export { findPeakElement };
