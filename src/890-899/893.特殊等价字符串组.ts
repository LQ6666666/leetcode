function numSpecialEquivGroups(words: string[]): number {
  const n = words.length;
  const set = new Set<string>();
  for (let i = 0; i < n; i++) {
    const word = words[i];
    const m = word.length;
    const even = new Array<number>(26).fill(0);
    const odd = new Array<number>(26).fill(0);
    for (let j = 0; j < m; j++) {
      const code = word.charCodeAt(j) - 97;
      if (j % 2 === 0) {
        even[code]++;
      } else {
        odd[code]++;
      }
    }
    set.add(even.join(",") + "-" + odd.join(","));
  }
  return set.size;
}

export {};
