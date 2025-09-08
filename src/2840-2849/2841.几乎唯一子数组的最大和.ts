function maxSum(nums: number[], m: number, k: number): number {
  const n = nums.length;
  let ans = 0;
  const map = new Map<number, number>();
  let sum = 0;

  for (let i = 0, j = 0; j < n; j++) {
    sum += nums[j];
    map.set(nums[j], (map.get(nums[j]) ?? 0) + 1);

    while (j - i + 1 > k) {
      sum -= nums[i];
      const count = (map.get(nums[i]) ?? 0) - 1;
      if (count <= 0) {
        map.delete(nums[i]);
      } else {
        map.set(nums[i], count);
      }
      i++;
    }

    if (j - i + 1 === k && map.size >= m) {
      ans = Math.max(sum, ans);
    }
  }

  return ans;
}

export { maxSum };
