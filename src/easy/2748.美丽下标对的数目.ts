function countBeautifulPairs(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    while (nums[i] >= 10) {
      nums[i] = Math.floor(nums[i] / 10);
    }

    for (let j = i + 1; j < n; j++) {
      if (gcd(nums[i], nums[j] % 10) === 1) {
        ans++;
      }
    }
  }
  return ans;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export { countBeautifulPairs };
