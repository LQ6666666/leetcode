function scoreOfString(s: string): number {
  const n = s.length;
  let ans = 0;
  for (let i = 1; i < n; i++) {
    ans += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return ans;
}

export { scoreOfString };
