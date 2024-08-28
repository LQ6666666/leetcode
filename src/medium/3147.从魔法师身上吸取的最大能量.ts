function maximumEnergy(energy: number[], k: number): number {
  const n = energy.length;
  let ans = Number.MIN_SAFE_INTEGER;

  for (let i = n - k; i < n; i++) {
    // 后缀和
    let s = 0;
    for (let j = i; j >= 0; j -= k) {
      s += energy[j];
      ans = Math.max(ans, s);
    }
  }

  return ans;
}

export { maximumEnergy };
