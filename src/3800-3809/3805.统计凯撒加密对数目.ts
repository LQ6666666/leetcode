function countPairs(words: string[]): number {
  const n = words.length;
  const map = new Map<string, number>();
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const word = words[i].split("");
    const base = word[0].charCodeAt(0);
    for (let j = 0; j < word.length; j++) {
      word[j] = String.fromCharCode(97 + ((word[j].charCodeAt(0) - base + 26) % 26));
    }
    const s = word.join("");
    const count = map.get(s) ?? 0;
    ans += count;
    map.set(s, count + 1);
  }

  return ans;
}

export {};
