function balancedString(s: string): number {
  const counts = new Map(["Q", "W", "E", "R"].map(c => [c, 0]));
  for (const ch of s) {
    counts.set(ch, counts.get(ch)! + 1);
  }

  const n = s.length;
  const partial = n / 4;
  let ans = n;

  if (check()) return 0;

  for (let left = 0, right = 0; left < s.length; left++) {
    while (right < n && !check()) {
      counts.set(s[right], counts.get(s[right])! - 1);
      right++;
    }

    if (!check()) break;
    ans = Math.min(ans, right - left);
    counts.set(s[left], counts.get(s[left])! + 1);
  }

  return ans;

  function check() {
    if (
      counts.get("Q")! > partial ||
      counts.get("W")! > partial ||
      counts.get("E")! > partial ||
      counts.get("R")! > partial
    ) {
      return false;
    }

    return true;
  }
}

export { balancedString };
