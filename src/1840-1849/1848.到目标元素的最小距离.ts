function getMinDistance(nums: number[], target: number, start: number): number {
  const n = nums.length;
  let ans = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      ans = Math.min(ans, Math.abs(i - start));
    }
  }

  return ans;
}

export { getMinDistance };
