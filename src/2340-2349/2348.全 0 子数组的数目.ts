function zeroFilledSubarray(nums: number[]): number {
  const n = nums.length;
  let ans = 0;

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      count = 0;
    }
    ans += count;
  }

  return ans;
}

export { zeroFilledSubarray };
