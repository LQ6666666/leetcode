// 暴力
function lastSubstring(s: string): string {
  let maxCh = s[0];
  const n = s.length;
  for (let i = 1; i < n; i++) {
    if (maxCh < s[i]) {
      maxCh = s[i];
    }
  }

  let ans = "";
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === maxCh) {
      const part = s.slice(i);
      if (part > ans) {
        ans = part;
      }
    }
  }

  return ans;
}

export {};
