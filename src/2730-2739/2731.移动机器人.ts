const mod = 1e9 + 7;

function sumDistance(nums: number[], s: string, d: number): number {
  const n = nums.length;
  const pos = new Array<number>(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (s[i] === "L") {
      pos[i] = nums[i] - d;
    } else {
      pos[i] = nums[i] + d;
    }
  }

  pos.sort((a, b) => a - b);

  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans += ((((pos[i] - pos[i - 1]) * i) % mod) * (n - i)) % mod;
    ans %= mod;
  }

  return ans;
}

export { sumDistance };
