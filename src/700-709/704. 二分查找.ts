function search(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    const num = nums[middle];
    if (num === target) {
      return middle;
    } else if (num < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

export {};
