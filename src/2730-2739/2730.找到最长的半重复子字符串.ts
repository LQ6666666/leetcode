function longestSemiRepetitiveSubstring(s: string): number {
  const n = s.length;
  let ans = 1;
  let same = 0;

  for (let left = 0, right = 1; right < n; right++) {
    if (s[right] === s[right - 1] && ++same > 1) {
      left++;
      while (s[left] !== s[left - 1]) {
        left++;
      }
      same = 1;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

export { longestSemiRepetitiveSubstring };
