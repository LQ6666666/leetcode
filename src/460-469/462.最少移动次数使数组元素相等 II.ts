function minMoves2(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const middle = nums[n >> 1];
  let ans = 0;
  for (const num of nums) {
    ans += Math.abs(num - middle);
  }

  return ans;
}

export {};
