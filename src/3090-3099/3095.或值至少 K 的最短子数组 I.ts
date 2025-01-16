function minimumSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;
  // 存储每一位（0-30位）的频次
  const bits = new Array<number>(32).fill(0);

  let value = 0;
  for (let l = 0, r = 0; r < n; r++) {
    // 将右边界元素加入 bit 数组
    value |= nums[r];
    for (let i = 0; i < 30; i++) {
      bits[i] += (nums[r] >> i) & 1;
    }

    // 检查，并动态更新
    while (l <= r && value >= k) {
      ans = Math.min(ans, r - l + 1);
      // 收缩窗口，左指针 l 右移
      for (let i = 0; i < 30; i++) {
        bits[i] -= (nums[l] >> i) & 1;
        if (bits[i] == 0) {
          // 或值要减小
          value -= value & (1 << i);
        }
      }
      // 增大左边界
      l++;
    }
  }

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

export { minimumSubarrayLength };
