function countPairs$(nums: number[], target: number): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] < target) {
        ans++;
      }
    }
  }
  return ans;
}

function countPairs(nums: number[], target: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let ans = 0;
  for (let i = 0, j = n - 1; j > 0; j--) {
    while (i < j && nums[i] + nums[j] < target) {
      i++;
    }
    ans += Math.min(i, j);
  }
  return ans;
}

export { countPairs };
