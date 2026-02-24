function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  // 1. 把负数变为 n + 1
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }
  // 2. 将 <= n 的元素对应位置变为负数
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (nums[i] <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }
  // 3. 返回第一个大于零的元素下标 + 1
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return n + 1;
}

export {};
