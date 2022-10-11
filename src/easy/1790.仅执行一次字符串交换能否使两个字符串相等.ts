function areAlmostEqual(s1: string, s2: string): boolean {
  const n = s1.length;
  let a = -1,
    b = -1;

  for (let i = 0; i < n; i++) {
    if (s1[i] == s2[i]) continue;
    if (a == -1) {
      a = i;
    } else if (b == -1) {
      b = i;
    } else {
      return false;
    }
  }

  if (a == -1 && b == -1) return true;
  if (a == -1 || b == -1) return false;
  return s1[a] == s2[b] && s1[b] == s2[a];
}

export { areAlmostEqual };
