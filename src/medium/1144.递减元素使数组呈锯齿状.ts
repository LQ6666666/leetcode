function movesToMakeZigzag(nums: number[]): number {
  return Math.min(helper(nums, 0), helper(nums, 1));
}

function helper(nums: number[], position: number): number {
  const n = nums.length;
  let ans = 0;

  for (let i = position; i < n; i += 2) {
    const num = nums[i];
    let t = 0;
    if (i - 1 >= 0) {
      t = Math.max(t, num - nums[i - 1] + 1);
    }
    if (i + 1 < n) {
      t = Math.max(t, num - nums[i + 1] + 1);
    }
    ans += t;
  }

  return ans;
}

export { movesToMakeZigzag };
