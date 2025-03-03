function canBeIncreasing(nums: number[]): boolean {
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) {
      return check(i - 1) || check(i);
    }
  }

  return true;

  function check(index: number): boolean {
    if (index > 0 && index < n && nums[index + 1] <= nums[index - 1]) {
      return false;
    }

    for (let i = 1; i < index; i++) {
      if (nums[i] <= nums[i - 1]) {
        return false;
      }
    }

    for (let i = index + 1; i < n; i++) {
      if (nums[i] <= nums[i - 1]) {
        return false;
      }
    }

    return true;
  }
}

export { canBeIncreasing };
