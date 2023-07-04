function matrixSum(nums: number[][]): number {
  const m = nums.length;
  const n = nums[0].length;
  // 每一行排序
  for (let i = 0; i < m; i++) {
    nums[i].sort((a, b) => b - a);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    let max = nums[0][i];
    for (let j = 1; j < m; j++) {
      max = Math.max(nums[j][i], max);
    }
    ans += max;
  }

  return ans;
}

export {};
