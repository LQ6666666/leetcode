function countBinarySubstrings(s: string): number {
  const n = s.length;
  let pre = 0;
  let cur = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    cur++;
    if (i === n - 1 || s[i] !== s[i + 1]) {
      ans += Math.min(pre, cur);
      pre = cur;
      cur = 0;
    }
  }

  return ans;
}

export {};
