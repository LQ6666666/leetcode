function minimumOperations(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  let count = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];

    if (nums.at(-1) === 0) break;

    if (num !== 0) {
      count++;
      nums.forEach((_, index) => (nums[index] -= num));
    }
  }

  return count;
}

export { minimumOperations };
