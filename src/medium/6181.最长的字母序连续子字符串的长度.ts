function longestContinuousSubstring(s: string): number {
  const n = s.length;
  let ans = 1;

  let count = 1;
  for (let i = 1; i < n; i++) {
    if (s[i].charCodeAt(0) - s[i - 1].charCodeAt(0) === 1) {
      count++;
    } else {
      count = 1;
    }

    ans = Math.max(ans, count);
  }

  return ans;
};

export { longestContinuousSubstring }
