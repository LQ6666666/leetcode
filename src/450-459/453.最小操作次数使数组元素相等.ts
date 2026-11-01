function minMoves(nums: number[]): number {
  const n = nums.length;
  let min: number = nums[0];
  let sum: number = nums[0];

  for (let i = 1; i < n; i++) {
    sum += nums[i];
    min = Math.min(nums[i], min);
  }

  // 最大数 * 数组长度 - 数组和
  return sum - min * nums.length;
}

export {};
