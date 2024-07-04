function singleNonDuplicate(nums: number[]): number {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    let a: number;
    let b: number;
    if (middle % 2 === 0) {
      a = middle;
      b = middle + 1;
    } else {
      a = middle - 1;
      b = middle;
    }
    if (nums[a] === nums[b]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return nums[left];
}

export { singleNonDuplicate };
