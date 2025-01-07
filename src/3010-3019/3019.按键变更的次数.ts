function countKeyChanges(s: string): number {
  const n = s.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (!isEquals(s[i - 1], s[i])) {
      ans++;
    }
  }
  return ans;
}

function isEquals(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase();
}

export { countKeyChanges };
