function maximumLengthSubstring(s: string): number {
  const n = s.length;
  const counts = new Array<number>(26).fill(0);

  let ans = 0;
  let left = 0;
  for (let right = 0; right < n; right++) {
    const code = s[right].charCodeAt(0) - 97;
    counts[code]++;
    while (counts[code] > 2) {
      counts[s[left].charCodeAt(0) - 97]--;
      left++;
    }
    ans = Math.max(right - left + 1, ans);
  }

  return ans;
}

export { maximumLengthSubstring };
