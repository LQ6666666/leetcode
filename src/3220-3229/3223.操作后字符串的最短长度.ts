function minimumLength(s: string): number {
  const counts = new Array<number>(26).fill(0);
  for (const ch of s) {
    counts[ch.charCodeAt(0) - 97]++;
  }

  let ans = 0;
  for (let i = 0; i < 26; i++) {
    ans += ((counts[i] - 1) % 2) + 1;
  }
  return ans;
}

export {};
