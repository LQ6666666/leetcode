function minimumDeletions(nums: number[]): number {
  const n = nums.length;
  let maxIndex = 0;
  let minIndex = 0;

  for (let i = 1; i < n; i++) {
    const num = nums[i];
    if (num > nums[maxIndex]) {
      maxIndex = i;
    }
    if (num < nums[minIndex]) {
      minIndex = i;
    }
  }

  // 最值下标中的较小值
  const l = Math.min(minIndex, maxIndex);
  // 最值下标中的较大值
  const r = Math.max(minIndex, maxIndex);

  // 计算三种情况下删除次数的最小值
  return Math.min(r + 1, n - l, l + 1 + n - r);
}

export {};
