function minimumOperations(nums: number[]): number {
  const n = nums.length;

  const set = new Set<number>();
  let i = n - 1;
  for (; i >= 0; i--) {
    if (set.has(nums[i])) {
      break;
    }
    set.add(nums[i]);
  }

  return Math.ceil((i + 1) / 3);
}

export { minimumOperations };
