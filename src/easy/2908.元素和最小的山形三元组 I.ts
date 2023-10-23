function minimumSum(nums: number[]): number {
  const n = nums.length;
  // 右边最小的（后缀和）
  const suf = new Array<number>(n).fill(0);
  suf[n - 1] = nums[n - 1];
  for (let i = n - 2; i > 1; i--) {
    suf[i] = Math.min(suf[i + 1], nums[i]);
  }

  let ans = Number.MAX_SAFE_INTEGER;
  // 左边最小的（前缀和）
  let pre = nums[0];
  // 枚举中间的数
  for (let i = 1; i < n; i++) {
    const num = nums[i];
    // 在计算的前缀和的过程，计算答案
    if (pre < num && num > suf[i + 1]) {
      ans = Math.min(ans, pre + num + suf[i + 1]);
    }
    pre = Math.min(pre, num);
  }

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

export { minimumSum };
