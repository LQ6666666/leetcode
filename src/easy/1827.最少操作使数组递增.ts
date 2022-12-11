function minOperations(nums: number[]): number {
  let max = nums[0] - 1,
    ans = 0;

  for (const num of nums) {
    max = Math.max(max + 1, num);
    ans += max - num;
  }

  return ans;
}

export { minOperations };
