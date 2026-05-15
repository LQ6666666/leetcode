function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else if (nums[middle] < nums[right]) {
      right = middle;
    } else {
      right--;
    }
  }
  return nums[left];
}

export {};
