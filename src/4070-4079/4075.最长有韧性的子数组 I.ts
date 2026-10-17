function resilientSubarray(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    const r = nums[i] % k;
    if (i > 0 && r === nums[i - 1] % k) {
      count++;
    } else {
      count = 1;
    }

    if ((r * (count - 1)) % k === 0) {
      ans = Math.max(ans, count);
    }
  }

  return ans;
}

export {};
