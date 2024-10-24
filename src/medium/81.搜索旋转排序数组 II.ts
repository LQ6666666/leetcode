function search(nums: number[], target: number): boolean {
  const n = nums.length;

  let left = 0,
    right = n - 1;
  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (nums[middle] === target) {
      return true;
    }

    if (nums[left] === nums[middle] && nums[right] === nums[middle]) {
      left++;
      right--;
    } else if (nums[left] <= nums[middle]) {
      if (nums[left] <= target && target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (nums[middle] < target && target <= nums[n - 1]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return false;
}

export { search };
