function findGCD(nums: number[]): number {
  const n = nums.length;
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < n; i++) {
    min = Math.min(nums[i], min);
    max = Math.max(nums[i], max);
  }
  return gcd(min, max);
}

function gcd(x: number, y: number): number {
  return y === 0 ? x : gcd(y, x % y);
}

export { findGCD };
