function topKFrequent(words: string[], k: number): string[] {
  const map = new Map<string, number>();
  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }

  const keys = Array.from(map.keys());

  keys.sort((a, b) => {
    const count1 = map.get(a)!;
    const count2 = map.get(b)!;
    if (count1 === count2) {
      return a.localeCompare(b);
    } else {
      return count2 - count1;
    }
  });

  return keys.slice(0, k);
}

export { topKFrequent };
