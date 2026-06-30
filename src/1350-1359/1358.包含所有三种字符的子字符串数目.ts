function numberOfSubstrings(s: string): number {
  const n = s.length;
  const map: Record<string, number> = {
    a: 0,
    b: 0,
    c: 0
  };

  let ans = 0;
  for (let i = 0, j = 0; j < n; j++) {
    map[s[j]]++;
    while (map.a > 0 && map.b > 0 && map.c > 0) {
      ans += n - j;
      map[s[i]]--;
      i++;
    }
  }

  return ans;
}

export {};
