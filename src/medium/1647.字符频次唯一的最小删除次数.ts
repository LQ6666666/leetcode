function minDeletions(s: string): number {
  const map = new Map<string, number>();
  for (const ch of s) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  let ans = 0;

  const set = new Set<number>();
  map.forEach(value => {
    while (value !== 0 && set.has(value)) {
      value--;
      ans++;
    }
    set.add(value);
  });

  return ans;
}

console.log(minDeletions("aab"));
console.log(minDeletions("aaabbbcc"));
console.log(minDeletions("ceabaacb"));

export { minDeletions };
