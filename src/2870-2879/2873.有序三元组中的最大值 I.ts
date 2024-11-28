function maximumTripletValue(nums: number[]): number {
  const n = nums.length;
  // (nums[i] − nums[j]) ∗ nums[k]
  // 我们需要知道 j 左侧元素的最大值，和 j 右侧元素的最大值

  // 后缀最大值
  const sufMax = new Array<number>(n + 1).fill(0);
  for (let i = n - 1; i > 1; i--) {
    sufMax[i] = Math.max(sufMax[i + 1], nums[i]);
  }

  let ans = 0;
  // 前缀最大值
  let preMax = nums[0];
  for (let j = 1; j < n - 1; j++) {
    ans = Math.max((preMax - nums[j]) * sufMax[j + 1], ans);
    preMax = Math.max(preMax, nums[j]);
  }

  return ans;
}

export { maximumTripletValue };
