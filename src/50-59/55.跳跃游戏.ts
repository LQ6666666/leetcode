function canJump(nums: number[]): boolean {
  const n = nums.length;

  let step = nums[0];
  let i = 1;
  for (; step !== 0 && i < n; i++) {
    step = Math.max(--step, nums[i]);
  }

  return i === n;
}

export {};
