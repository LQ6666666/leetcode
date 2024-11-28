function countWays(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  // 一个学生都不选
  let ans = nums[0] > 0 ? 1 : 0;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] < i && i < nums[i]) {
      ans++;
    }
  }

  // 一定可以都选
  return ans + 1;
}

export { countWays };
