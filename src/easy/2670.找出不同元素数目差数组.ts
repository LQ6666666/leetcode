function distinctDifferenceArray(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n);
  const set = new Set<number>();
  // 正序前缀包括当前数字
  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
    ans[i] = set.size;
  }

  set.clear();
  // 注意逆序后缀不包括当前数字
  for (let i = n - 1; i >= 0; i--) {
    set.add(nums[i]);

    if (i > 0) {
      ans[i - 1] -= set.size;
    }
  }

  return ans;
}

export {};
