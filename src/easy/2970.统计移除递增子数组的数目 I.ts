function incremovableSubarrayCount(nums: number[]): number {
  const n = nums.length;
  let ans = 0;

  // 枚举 nums 中的每个子数组并判断是否为移除递增子数组
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (check(i, j)) {
        ans++;
      }
    }
  }

  return ans;

  function check(l: number, r: number): boolean {
    for (let i = 1; i < n; i++) {
      if (i >= l && i <= r + 1) {
        continue;
      }
      if (nums[i] <= nums[i - 1]) {
        return false;
      }
    }

    if (l - 1 >= 0 && r + 1 < n && nums[r + 1] <= nums[l - 1]) {
      return false;
    }
    return true;
  }
}

export { incremovableSubarrayCount };
