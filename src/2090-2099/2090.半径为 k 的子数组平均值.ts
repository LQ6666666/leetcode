function getAverages(nums: number[], k: number): number[] {
  const n = nums.length;
  const ans = new Array<number>(n).fill(-1);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];

    if (i - k * 2 < 0) {
      continue;
    }

    ans[i - k] = Math.floor(sum / (k * 2 + 1));
    sum -= nums[i - k * 2];
  }

  return ans;
}

export { getAverages };
