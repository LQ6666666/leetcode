function minimumSumSubarray(nums: number[], l: number, r: number): number {
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= n - l; i++) {
    let s = 0;
    for (let j = i; j < n && j - i + 1 <= r; j++) {
      s += nums[j];
      if (s > 0 && j - i + 1 >= l) {
        ans = Math.min(ans, s);
      }
    }
  }

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

export {};
