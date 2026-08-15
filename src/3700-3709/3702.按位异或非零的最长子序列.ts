function longestSubsequence(nums: number[]): number {
  const n = nums.length;
  let hasNonZero = false;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    hasNonZero = hasNonZero || nums[i] != 0;
    xor ^= nums[i];
  }
  if (!hasNonZero) {
    // nums 全为 0，无解
    return 0;
  }
  let ans = n;
  if (xor === 0) {
    // 去掉 nums 的一个非零元素，就可以使 xor 不为 0
    ans--;
  }
  // 全选即可满足条件
  return ans;
}

export {};
