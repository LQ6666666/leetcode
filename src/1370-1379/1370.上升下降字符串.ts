function sortString(s: string): string {
  const n = s.length;
  const counts = new Array<number>(26).fill(0);
  for (let i = 0; i < n; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }
  let ans = "";
  let total = n;
  while (total > 0) {
    for (let i = 0; i < 26; i++) {
      if (counts[i] > 0) {
        ans += String.fromCharCode(i + 97);
        total--;
        counts[i]--;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (counts[i] > 0) {
        ans += String.fromCharCode(i + 97);
        total--;
        counts[i]--;
      }
    }
  }
  return ans;
}

export { sortString };
