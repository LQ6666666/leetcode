function partitionArray(nums: number[], k: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = 1;
  let start = nums[0];

  for (let i = 1; i < n; i++) {
    const num = nums[i];
    if (num - start > k) {
      start = num;
      ans++;
    }
  }

  return ans;
}

export { partitionArray };
