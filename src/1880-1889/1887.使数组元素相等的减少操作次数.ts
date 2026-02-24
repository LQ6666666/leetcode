function reductionOperations(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let ans = 0;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      count++;
    }
    ans += count;
  }

  return ans;
}

export {};
