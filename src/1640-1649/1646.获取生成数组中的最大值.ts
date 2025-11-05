function getMaximumGenerated(n: number): number {
  if (n == 0 || n == 1) return n;

  const nums = new Array<number>(n + 1).fill(0);
  nums[0] = 0;
  nums[1] = 1;

  let max = 1;
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      nums[i] = nums[Math.floor(i / 2)];
    } else {
      nums[i] = nums[Math.floor(i / 2)] + nums[Math.floor((i + 1) / 2)];
    }
    max = Math.max(max, nums[i]);
  }

  return max;
}

export { getMaximumGenerated };
