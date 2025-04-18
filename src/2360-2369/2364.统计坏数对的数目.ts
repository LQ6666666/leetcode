function countBadPairs(nums: number[]): number {
  // j − i != nums[j] − nums[i]
  // 移项得 nums[i] − i != nums[j] − j
  // 正难则反，用总数对个数 n(n−1)/2 减去满足 nums[i] − i == nums[j] − j 的数对个数即为答案

  const n = nums.length;
  let ans = (n * (n - 1)) / 2;
  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const x = nums[i] - i;
    const count = map.get(x) ?? 0;
    ans -= count;
    map.set(x, count + 1);
  }

  return ans;
}

export { countBadPairs };
