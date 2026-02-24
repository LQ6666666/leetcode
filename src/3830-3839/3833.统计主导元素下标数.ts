function dominantIndices(nums: number[]): number {
  const n = nums.length;
  let sum = nums[n - 1];
  let ans = 0;
  for (let i = n - 2; i >= 0; i--) {
    const average = sum / (n - i - 1);
    if (nums[i] > average) {
      ans++;
    }
    sum += nums[i];
  }
  return ans;
}

export {};
