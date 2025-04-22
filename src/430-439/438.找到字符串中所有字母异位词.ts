function findAnagrams(s: string, p: string): number[] {
  const n = s.length;
  const m = p.length;
  const pMap = new Array<number>(26).fill(0);

  for (let i = 0; i < m; i++) {
    pMap[p.charCodeAt(i) - 97]++;
  }

  const ans: number[] = [];
  for (let i = 0; i <= n - m; i++) {
    const wMap = new Array<number>(26).fill(0);
    for (let j = i; j < i + m; j++) {
      wMap[s.charCodeAt(j) - 97]++;
    }
    if (check(wMap, pMap)) {
      ans.push(i);
    }
  }

  return ans;

  function check(a: number[], b: number[]) {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}

export { findAnagrams };
