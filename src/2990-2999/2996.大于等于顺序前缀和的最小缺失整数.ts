function missingInteger(nums: number[]): number {
  const n = nums.length;

  let sum = 0;
  let j = 0;
  for (; j < n; j++) {
    if (j === 0 || nums[j] === nums[j - 1] + 1) {
      sum += nums[j];
    } else {
      break;
    }
  }

  const set = new Set(nums);
  let ans = sum;
  while (set.has(ans)) {
    ans++;
  }
  return ans;
}

export {};
