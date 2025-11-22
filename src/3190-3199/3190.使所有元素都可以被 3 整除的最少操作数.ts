function minimumOperations(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    ans += Math.min(3 - (num % 3), num % 3);
  }
  return ans;
}

export {};
