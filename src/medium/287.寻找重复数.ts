function findDuplicate(nums: number[]): number {
  const n = nums.length;
  let i = 0;

  while (i < n) {
    if (nums[i] === i) {
      i++;
      continue;
    }

    if (nums[nums[i]] === nums[i]) {
      return nums[i];
    }
    let tmp = nums[i];
    nums[i] = nums[tmp];
    nums[tmp] = tmp;
  }

  return -1;
}

export { findDuplicate };
