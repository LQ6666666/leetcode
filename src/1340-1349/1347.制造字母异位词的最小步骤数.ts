function minSteps(s: string, t: string): number {
  const n = s.length;
  const map = new Array<number>(26).fill(0);
  for (let i = 0; i < n; i++) {
    map[s.charCodeAt(i) - 97]++;
    map[t.charCodeAt(i) - 97]--;
  }
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    const count = map[i];
    if (count > 0) {
      ans += count;
    }
  }
  return ans;
}

export {};
