function gcdSum(nums: number[]): number {
  const n = nums.length;
  let max = nums[0];
  const prefixGcd = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    max = Math.max(nums[i], max);
    prefixGcd[i] = gcd(nums[i], max);
  }
  prefixGcd.sort((a, b) => a - b);

  let ans = 0;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    const a = prefixGcd[i];
    const b = prefixGcd[n - i - 1];
    ans += gcd(a, b);
  }
  return ans;
}

function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

export {};
