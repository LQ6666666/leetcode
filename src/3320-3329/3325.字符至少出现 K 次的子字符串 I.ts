function numberOfSubstrings(s: string, k: number): number {
  const n = s.length;
  const counts = new Array<number>(26).fill(0);

  let ans = 0;
  for (let i = 0, j = 0; j < n; j++) {
    counts[s.charCodeAt(j) - 97]++;

    while (counts[s.charCodeAt(j) - 97] >= k) {
      counts[s.charCodeAt(i) - 97]--;
      i++;
    }

    ans += i;
  }

  return ans;
}

export { numberOfSubstrings };
