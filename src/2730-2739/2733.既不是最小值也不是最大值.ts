function findNonMinOrMax(nums: number[]): number {
  let min = nums[0];
  let max = nums[0];
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  for (const num of nums) {
    if (num !== min && num !== max) {
      return num;
    }
  }

  return -1;
}

export {};
