function minOperations(nums: number[], k: number): number {
  let ans = 0;
  for (const num of nums) {
    if (num < k) {
      ans++;
    }
  }
  return ans;
}

export { minOperations };
