function countPairs(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] == nums[j] && (i * j) % k === 0) {
        ans++;
      }
    }
  }
  return ans;
}

export { countPairs };
