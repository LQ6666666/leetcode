function maxAlternatingSum(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));

  let ans = 0;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    ans += Math.pow(nums[n - i - 1], 2) - Math.pow(nums[i], 2);
  }

  if (n % 2 !== 0) {
    ans += Math.pow(nums[Math.floor(n / 2)], 2);
  }

  return ans;
}

export {};
