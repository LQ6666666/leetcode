function unequalTriplets(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) continue;

      for (let k = j + 1; k < n; k++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          ans++;
        }
      }
    }
  }
  return ans;
}

export { unequalTriplets };
