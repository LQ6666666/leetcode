// 贪心
function maxSubArray(nums: number[]): number {
  let ans = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (const num of nums) {
    sum += num;
    ans = Math.max(ans, sum);

    if (sum < 0) {
      sum = 0;
    }
  }

  return ans;
}

export { maxSubArray };
