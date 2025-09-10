function equalSubstring(s: string, t: string, maxCost: number): number {
  const n = s.length;
  let ans = 0;

  let cost = 0;
  for (let i = 0, j = 0; j < n; j++) {
    cost += Math.abs(s.charCodeAt(j) - 97 - (t.charCodeAt(j) - 97));
    while (cost > maxCost) {
      cost -= Math.abs(s.charCodeAt(i) - 97 - (t.charCodeAt(i) - 97));
      i++;
    }

    ans = Math.max(ans, j - i + 1);
  }

  return ans;
}

export { equalSubstring };
