function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  let ans = 0;
  for (let j = 0; j < n; j++) {
    const l = lowerBound(0, j, lower - nums[j]);
    const r = lowerBound(0, j, upper - nums[j] + 1);
    ans += r - l;
  }
  return ans;

  function lowerBound(left: number, right: number, target: number): number {
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}

export { countFairPairs };
