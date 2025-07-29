function minChanges(s: string): number {
  const n = s.length;

  let ans = 0;
  for (let i = 0; i < n; i += 2) {
    if (s[i] !== s[i + 1]) {
      ans++;
    }
  }
  return ans;
}

export { minChanges };
