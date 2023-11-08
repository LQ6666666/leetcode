function findTheLongestBalancedSubstring(s: string): number {
  const n = s.length;
  let ans = 0;

  let i = 0;
  while (i < n) {
    let zero = 0;
    while (i < n && s[i] === "0") {
      zero++;
      i++;
    }

    let one = 0;
    while (i < n && s[i] === "1") {
      one++;
      i++;
    }

    ans = Math.max(ans, Math.min(one, zero) * 2);
  }

  return ans;
}

export { findTheLongestBalancedSubstring };
