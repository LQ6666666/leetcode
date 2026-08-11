function maxPairStrength(nums: number[]): number {
  const n = nums.length;
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      ans = Math.max(Math.floor((nums[i] * nums[j]) / Math.pow(gcd(nums[i], nums[j]), 2)), ans);
    }
  }
  return ans;
}

function gcd(x: number, y: number): number {
  return y == 0 ? x : gcd(y, x % y);
}

export {};
