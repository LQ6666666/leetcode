function minOperations(grid: number[][], x: number): number {
  const m = grid.length;
  const n = grid[0].length;

  const nums = new Array<number>(m * n);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = grid[i][j];
      if ((num - grid[0][0]) % x !== 0) {
        return -1;
      }
      nums[i * n + j] = num;
    }
  }
  nums.sort((a, b) => a - b);
  // 中位数
  const median = nums[Math.floor((m * n) / 2)];

  let ans = 0;
  for (let i = 0; i < m * n; i++) {
    ans += Math.abs(nums[i] - median) / x;
  }
  return ans;
}

export {};
