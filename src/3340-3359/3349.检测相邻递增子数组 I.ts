function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  const n = nums.length;
  let ans = 0;
  let preCnt = 0;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    cnt++;
    if (i === n - 1 || nums[i] >= nums[i + 1]) {
      // i 是严格递增段的末尾
      ans = Math.max(ans, Math.floor(cnt / 2), Math.min(preCnt, cnt));
      preCnt = cnt;
      cnt = 0;
    }
  }
  return ans >= k;
}

export {};
