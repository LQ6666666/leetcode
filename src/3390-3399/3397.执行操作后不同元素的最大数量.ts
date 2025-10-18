function maxDistinctElements(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  let ans = 1;
  nums[0] -= k;
  for (let i = 1; i < n; i++) {
    const diff = nums[i] - (nums[i - 1] + 1);
    const m = Math.min(Math.abs(diff), k);
    nums[i] += (diff >= 0 ? -1 : 1) * m;

    if (nums[i] > nums[i - 1]) {
      ans++;
    }
  }

  return ans;
}

export { maxDistinctElements };
