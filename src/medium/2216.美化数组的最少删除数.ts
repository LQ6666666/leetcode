function minDeletion(nums: number[]): number {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i + 1 < n; i++) {
    if ((i - count) % 2 === 0 && nums[i] === nums[i + 1]) {
      count++;
    }
  }

  return (n - count) % 2 === 0 ? count : count + 1;
}

export { minDeletion };
