function findMismatchedSegments(s1: string, s2: string): string[][] {
  s1 += "#";
  s2 += "#";

  const n = s1.length;
  const ans: [string, string][] = [];

  let p: number = -1;
  for (let i = 0; i < n; i++) {
    const a = s1[i];
    const b = s2[i];
    if (a === b) {
      if (p !== -1) {
        ans.push([s1.slice(p, i), s2.slice(p, i)]);
        p = -1;
      }
    } else {
      if (p === -1) {
        p = i;
      }
    }
  }

  return ans;
}

export {};
