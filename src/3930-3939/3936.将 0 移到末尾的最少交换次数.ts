function minimumSwaps(nums: number[]): number {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      count++;
    }
  }

  let ans = 0;
  for (let i = 0; i < count; i++) {
    if (nums[i] === 0) {
      ans++;
    }
  }
  return ans;
}

export {};
