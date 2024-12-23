function minCharacters(a: string, b: string): number {
  const n = a.length;
  const m = b.length;
  const count1 = new Array<number>(26).fill(0);
  const count2 = new Array<number>(26).fill(0);
  for (let i = 0; i < n; i++) {
    count1[a.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < m; i++) {
    count2[b.charCodeAt(i) - 97]++;
  }

  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < 26 && ans != 0; i++) {
    // 3
    let ca = n - count1[i];
    let cb = m - count2[i];
    ans = Math.min(ans, ca + cb);
    if (i == 0) continue;

    let r1 = 0;
    let r2 = 0;
    // 1
    for (let j = i; j < 26; j++) {
      r1 += count1[j];
    }
    for (let j = 0; j < i; j++) {
      r1 += count2[j];
    }
    // 2
    for (let j = i; j < 26; j++) {
      r2 += count2[j];
    }
    for (let j = 0; j < i; j++) {
      r2 += count1[j];
    }
    ans = Math.min(ans, Math.min(r1, r2));
  }

  return ans;
}

export { minCharacters };
