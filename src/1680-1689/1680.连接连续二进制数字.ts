function concatenatedBinary(n: number): number {
  const MOD = 1_000_000_007;
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    const w = bitWidth(i);
    // ans = ((ans << w) | i) % MOD;
    ans = (ans * (1 << w) + i) % MOD;
  }

  return ans;
}

function bitWidth(x: number): number {
  let count = 0;

  while (x) {
    x >>= 1;
    count++;
  }

  return count;
}

export {};
