function maximumLength(s: string): number {
  const map = new Map<string, number>();
  const n = s.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j]) {
        const key = s.slice(i, j + 1);
        map.set(key, (map.get(key) ?? 0) + 1);
      } else {
        break;
      }
    }
  }

  let ans = -1;
  map.forEach((value, key) => {
    if (value >= 3) {
      ans = Math.max(ans, key.length);
    }
  });

  return ans;
}

export { maximumLength };
