function findClosestNumber(nums: number[]): number {
  const n = nums.length;
  let ans = nums[0];

  for (let i = 1; i < n; i++) {
    const num = nums[i];
    if (Math.abs(num) === Math.abs(ans)) {
      ans = Math.max(num, ans);
    } else if (Math.abs(num) < Math.abs(ans)) {
      ans = num;
    }
  }

  return ans;
}

export {};
