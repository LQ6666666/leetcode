function minRemoval(nums: number[], k: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let max = 0;
  for (let i = 0, j = 0; j < n; j++) {
    while (nums[i] * k < nums[j]) {
      i++;
    }

    max = Math.max(max, j - i + 1);
  }
  return n - max;
}

export { minRemoval };
