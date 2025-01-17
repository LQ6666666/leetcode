function minimumSubarrayLength(nums: number[], k: number): number {
  const n = nums.length;
  const bits = new Array<number>(32).fill(0);
  let value = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  for (let l = 0, r = 0; r < n; r++) {
    value |= nums[r];
    for (let i = 0; i < 30; i++) {
      bits[i] += (nums[r] >> i) & 1;
    }

    while (l <= r && value >= k) {
      ans = Math.min(ans, r - l + 1);

      for (let i = 0; i < 30; i++) {
        bits[i] -= (nums[l] >> i) & 1;
        if (bits[i] === 0) {
          value -= value & (1 << i);
        }
      }

      l++;
    }
  }

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}

export { minimumSubarrayLength };
