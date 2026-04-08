function xorAfterQueries(nums: number[], queries: number[][]): number {
  const MOD = 1e9 + 7;

  for (const [l, r, k, v] of queries) {
    for (let i = l; i <= r; i += k) {
      nums[i] = Number((BigInt(nums[i]) * BigInt(v)) % BigInt(MOD));
    }
  }

  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
}

export {};
