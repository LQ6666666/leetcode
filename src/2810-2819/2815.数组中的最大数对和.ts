function maxSum(nums: number[]): number {
  const n = nums.length;
  const maxNums = nums.map(getMax);

  let ans = -1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (maxNums[i] === maxNums[j]) {
        ans = Math.max(ans, nums[i] + nums[j]);
      }
    }
  }

  return ans;
}

function getMax(num: number): number {
  let x = num;
  let max = 0;
  while (x > 0) {
    max = Math.max(max, x % 10);
    x = Math.floor(x / 10);
  }
  return max;
}

export { maxSum };
