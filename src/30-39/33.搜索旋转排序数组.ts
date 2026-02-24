function search(nums: number[], target: number): number {
  const n = nums.length;
  if (n < 2) return nums[0] === target ? 0 : -1;

  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[0] <= nums[middle]) {
      // 判断左边是否有序
      if (nums[0] <= target && target < nums[middle]) {
        right = right - 1;
      } else {
        left = left + 1;
      }
    } else {
      if (nums[middle] < target && target <= nums[n - 1]) {
        left = left + 1;
      } else {
        right = right - 1;
      }
    }
  }

  return -1;
}

export {};
