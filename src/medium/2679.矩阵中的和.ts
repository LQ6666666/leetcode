function matrixSum(nums: number[][]): number {
  for (const item of nums) {
    item.sort((a, b) => b - a);
  }

  const m = nums.length;
  const n = nums[0].length;

  let ans = 0;
  for (let i = 0; i < n; i++) {
    let max = -1;
    for (let j = 0; j < m; j++) {
      max = Math.max(max, nums[j][i]);
    }
    ans += max;
  }

  return ans;
}

export {};
