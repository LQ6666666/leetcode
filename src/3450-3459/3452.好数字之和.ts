function sumOfGoodNumbers(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    const a = i - k >= 0;
    const b = i + k < n;

    if (a && b) {
      if (num > nums[i - k] && num > nums[i + k]) {
        ans += num;
      }
    } else if (a) {
      if (num > nums[i - k]) {
        ans += num;
      }
    } else if (b) {
      if (num > nums[i + k]) {
        ans += num;
      }
    }
  }
  return ans;
}

export { sumOfGoodNumbers };
