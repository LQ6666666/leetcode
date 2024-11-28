function maximumBeauty(nums: number[], k: number): number {
  const n = nums.length;
  nums.sort((x, y) => x - y);

  let ans = 0;
  for (let i = 0, j = 0; i < n; i++) {
    while (nums[i] - 2 * k > nums[j]) {
      j++;
    }
    ans = Math.max(ans, i - j + 1);
  }
  return ans;
}

export { maximumBeauty };
