function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  const n = nums.length;

  for (let i = 0; i < k; i++) {
    let x = nums[0];
    let index = 0;
    for (let j = 1; j < n; j++) {
      const num = nums[j];
      if (num < x) {
        x = num;
        index = j;
      }
    }
    nums[index] = x * multiplier;
  }

  return nums;
}

export { getFinalState };
