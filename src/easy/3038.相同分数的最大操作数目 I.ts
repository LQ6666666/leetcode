function maxOperations(nums: number[]): number {
  const n = nums.length;
  let ans = 1;
  let score = nums[0] + nums[1];
  for (let i = 2; i < n; i += 2) {
    if (score === nums[i] + nums[i + 1]) {
      ans++;
    } else {
      break;
    }
  }
  return ans;
}

export { maxOperations };
