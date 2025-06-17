function countPartitions(nums: number[]): number {
  const n = nums.length;
  const total = nums.reduce((memo, num) => (memo += num), 0);
  let ans = 0;
  let left = 0;
  for (let i = 0; i < n - 1; i++) {
    left += nums[i];
    if ((left - (total - left)) % 2 === 0) {
      ans++;
    }
  }
  return ans;
}

export { countPartitions };
