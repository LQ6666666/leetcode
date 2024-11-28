function getSmallestString(s: string, k: number): string {
  if (k === 0) return s;
  const n = s.length;

  let ans = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 26; j++) {
      const t = String.fromCharCode("a".charCodeAt(0) + j);
      const distance = getDistance(s[i], t);
      if (distance <= k) {
        ans += t;
        k -= distance;
        break;
      }
    }
  }

  return ans;
}

function getDistance(s: string, t: string): number {
  const pos1 = Math.abs(s.charCodeAt(0) - t.charCodeAt(0));
  const pos2 = 26 - pos1;
  return Math.min(pos1, pos2);
}

export { getSmallestString };
