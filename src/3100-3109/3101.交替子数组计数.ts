function countAlternatingSubarrays(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] !== nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    ans += count;
  }

  return ans;
}

export {};
