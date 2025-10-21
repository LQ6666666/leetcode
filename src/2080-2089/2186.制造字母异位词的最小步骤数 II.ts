function minSteps(s: string, t: string): number {
  const counts1 = new Array<number>(26).fill(0);
  const counts2 = new Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counts1[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < t.length; i++) {
    counts2[t.charCodeAt(i) - 97]++;
  }

  let ans = 0;
  for (let i = 0; i < 26; i++) {
    ans += Math.abs(counts1[i] - counts2[i]);
  }

  return ans;
}

export { minSteps };
