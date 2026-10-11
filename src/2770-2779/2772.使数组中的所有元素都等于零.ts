function checkArray(nums: number[], k: number): boolean {
  const n = nums.length;
  const d = new Array<number>(n + 1).fill(0);

  d[0] = nums[0];
  for (let i = 1; i < n; i++) {
    d[i] = nums[i] - nums[i - 1];
  }

  for (let i = 0; i <= n - k; i++) {
    if (d[i] === 0) continue;
    if (d[i] < 0) return false;
    d[i + k] += d[i];
  }

  for (let i = n - k + 1; i < n; i++) {
    if (d[i] !== 0) {
      return false;
    }
  }

  return true;
}

export {};
