function longestContinuousSubstring(s: string): number {
  const n = s.length;
  let ans = 1;

  let count = 1;
  for (let i = 1; i < n; i++) {
    if (s[i].charCodeAt(0) - s[i - 1].charCodeAt(0) === 1) {
      count++;
      ans = Math.max(ans, count);
    } else {
      count = 1;
    }
  }

  return ans;
}

export { longestContinuousSubstring };
