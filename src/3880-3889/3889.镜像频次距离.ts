function mirrorFrequency(s: string): number {
  const n = s.length;

  const map = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    const c = s[i];
    map.set(c, (map.get(c) ?? 0) + 1);
  }
  const mirrorMap = buildMirrorMap();

  let ans = 0;
  while (map.size > 0) {
    const c = map.keys().next().value!;
    const m = mirrorMap.get(c)!;
    ans += Math.abs((map.get(c) ?? 0) - (map.get(m) ?? 0));
    map.delete(c);
    map.delete(m);
  }

  return ans;
}

function buildMirrorMap() {
  const map = new Map<string, string>();
  for (let i = 97; i < 123; i++) {
    map.set(String.fromCharCode(i), String.fromCharCode(123 - 1 - i + 97));
  }
  for (let i = 0; i < 10; i++) {
    map.set("" + i, "" + (10 - 1 - i));
  }
  return map;
}

export {};
