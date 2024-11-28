function sumIndicesWithKSetBits$(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let count = 0;
    let x = i;
    while (x > 0) {
      count += x & 1;
      x >>= 1;
    }
    if (count === k) {
      ans += nums[i];
    }
  }

  return ans;
}

function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let ans = 0;

  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let x = i;
    let count = 0;
    while (x) {
      if (x & 1) {
        count++;
      }

      if (count > k) break;

      x = x >> 1;
    }
    ans += count === k ? nums[i] : 0;
  }

  return ans;
}

export {};
