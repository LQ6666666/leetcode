function countValidPrefixes(s: string): number {
  const n = s.length;
  let ans = 0;
  let cnt0 = 0;
  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "0") {
      cnt0++;
    } else {
      cnt1++;
    }

    if (Math.abs(cnt0 - cnt1) <= 1) {
      ans++;
    }
  }
  return ans;
}

export {};
