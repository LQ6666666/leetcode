function isTrionic(nums: number[]): boolean {
  const n = nums.length;

  let i = 1;
  while (i < n && nums[i - 1] < nums[i]) {
    i++;
  }
  if (i === 1) {
    return false;
  }

  let i0 = 1;
  while (i < n && nums[i - 1] > nums[i]) {
    i++;
  }
  if (i === i0 || i === n) {
    return false;
  }

  while (i < n && nums[i - 1] < nums[i]) {
    i++;
  }

  return i === n;
}

export {};
