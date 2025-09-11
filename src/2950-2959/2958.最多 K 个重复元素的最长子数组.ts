function maxSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;
  const map = new Map<number, number>();

  for (let i = 0, j = 0; j < n; j++) {
    map.set(nums[j], (map.get(nums[j]) ?? 0) + 1);

    while ((map.get(nums[j]) ?? 0) > k) {
      const count = (map.get(nums[i]) ?? 0) - 1;
      if (count > 0) {
        map.set(nums[i], count);
      } else {
        map.delete(nums[i]);
      }
      i++;
    }

    ans = Math.max(ans, j - i + 1);
  }

  return ans;
}

export { maxSubarrayLength };
