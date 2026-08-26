function shortestBeautifulSubstring(s: string, k: number): string {
  const n = s.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "1") {
      count++;
    }
  }
  if (count < k) return "";

  let ans = s;
  let cnt1 = 0;
  let left = 0;
  for (let right = 0; right < n; right++) {
    cnt1 += +s[right];
    while (cnt1 > k || s[left] === "0") {
      cnt1 -= +s[left++];
    }
    if (cnt1 === k) {
      const t = s.slice(left, right + 1);
      if (t.length < ans.length || (t.length == ans.length && t.localeCompare(ans) < 0)) {
        ans = t;
      }
    }
  }
  return ans;
}

export {};
