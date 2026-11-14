function maxPoints(technique1: number[], technique2: number[], k: number): number {
  const n = technique1.length;
  let ans = 0;
  const diff: number[] = [];

  for (let i = 0; i < n; i++) {
    ans += technique1[i];
    const d = technique2[i] - technique1[i];
    if (d > 0) {
      diff.push(d);
    }
  }
  diff.sort((a, b) => b - a);
  const limit = Math.min(n - k, diff.length);
  for (let i = 0; i < limit; i++) {
    ans += diff[i];
  }
  return ans;
}

export {};
