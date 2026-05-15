function prefixConnected(words: string[], k: number): number {
  const n = words.length;
  const map = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const word = words[i];
    if (word.length < k) {
      continue;
    }
    const p = word.slice(0, k);
    map.set(p, (map.get(p) ?? 0) + 1);
  }

  let ans = 0;
  map.forEach(value => {
    if (value > 1) {
      ans++;
    }
  });

  return ans;
}

export {};
