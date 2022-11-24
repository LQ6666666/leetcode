function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
  const n = nums.length;
  let ans = 0,
    last2 = -1,
    last1 = -1;

  for (let i = 0; i < n; i++) {
    const item = nums[i];
    // 找到符合的开始元素
    if (item >= left && item <= right) {
      last1 = i;
    } else if (item > right) {
      // 大于 right了
      // 重新从当前位置开始
      last2 = i;
      last1 = -1;
    }

    if (last1 !== -1) {
      // 两端点相减
      ans += last1 - last2;
    }
  }

  return ans;
}

export { numSubarrayBoundedMax };
