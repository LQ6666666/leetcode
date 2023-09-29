function minimumRightShifts(nums: number[]): number {
  const n = nums.length;
  // 找第一段
  let i = 1;
  while (i < n && nums[i - 1] < nums[i]) {
    i++;
  }
  // 本来就是有序
  if (i === n) return 0;

  // 无法构成递增数组
  if (nums[0] < nums[n - 1]) return -1;

  // 找第二段
  const middle = i;
  i++;
  while (i < n && nums[i - 1] < nums[i]) {
    i++;
  }

  // 超过两端
  if (i < n) return -1;

  return n - middle;
}

export {};
