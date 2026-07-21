function maxActiveSectionsAfterTrade(s: string): number {
  const n = s.length;
  let total1 = 0;
  let mx = 0;
  let pre0 = Number.MIN_SAFE_INTEGER;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    cnt++;
    if (i === n || s[i] !== s[i + 1]) {
      if (s[i] === "1") {
        total1 += cnt;
      } else {
        mx = Math.max(mx, pre0 + cnt);
        pre0 = cnt;
      }
      cnt = 0;
    }
  }

  return total1 + mx;
}

export {};
