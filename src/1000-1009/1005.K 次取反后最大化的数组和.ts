function largestSumAfterKNegations(nums: number[], k: number): number {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  let ans = nums.reduce((prev, cur) => prev + cur, 0);
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    let num = nums[i];
    if (k > 0 && num < 0) {
      num = -num;
      ans += num * 2;
      k--;

      if (k === 0) return ans;
    }

    min = Math.min(min, num);
  }

  if (k % 2 === 0) return ans;

  return ans - min * 2;
}

export { largestSumAfterKNegations };
