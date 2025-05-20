function isZeroArray(nums: number[], queries: number[][]): boolean {
  const n = nums.length;
  const diff = new Array<number>(n + 1).fill(0);
  for (const [l, r] of queries) {
    diff[l]++;
    diff[r + 1]--;
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += diff[i];
    // sum 表示 nums[i] 要减掉多少
    if (nums[i] > sum) {
      return false;
    }
  }

  return true;
}

export { isZeroArray };
