function countGoodSubstrings(s: string): number {
  const n = s.length;

  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    const a = s[i];
    const b = s[i + 1];
    const c = s[i + 2];

    if (a !== b && a !== c && b !== c) {
      ans++;
    }
  }

  return ans;
}

export {};
