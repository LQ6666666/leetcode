function findMaxConsecutiveOnes(nums: number[]): number {
  const n = nums.length;

  let ans = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count++;
      ans = Math.max(count, ans);
    } else {
      count = 0;
    }
  }

  return ans;
}

export {};
