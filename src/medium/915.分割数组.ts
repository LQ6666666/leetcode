function partitionDisjoint(nums: number[]): number {
  const n = nums.length;
  // 计算右边数组的最小值数组 [i, n] 中的最小值
  const rightMin = new Array(n);
  rightMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], nums[i]);
  }

  let ans = 0;
  let leftMax = 0;
  for (let i = 0; i < n - 1; i++) {
    // 当前的最大值
    leftMax = Math.max(leftMax, nums[i]);
    // [i + 1, n] 如果后面有小于当前这个值的，继续往下走
    // 如果 left 准备要小于 rifht 就借宿
    if (leftMax <= rightMin[i + 1]) {
      ans = i;
      break;
    }
  }

  return ans + 1;
}

export { partitionDisjoint };
