function findPermutationDifference(s: string, t: string): number {
  const indexMap = new Map<string, number>();

  const n = s.length;
  for (let i = 0; i < n; i++) {
    indexMap.set(s[i], i);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.abs(indexMap.get(t[i])! - i);
  }

  return ans;
}

export { findPermutationDifference };
