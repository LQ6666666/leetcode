function countWords(words1: string[], words2: string[]): number {
  if (words2.length > words1.length) return countWords(words2, words1);

  const word1Map = new Map<string, number>();
  for (const word of words1) {
    word1Map.set(word, (word1Map.get(word) ?? 0) + 1);
  }
  // 根据 words1 恰好出现一次 的字符串 计算出新的 words2
  words2 = words2.filter(word => word1Map.get(word) === 1);

  // 过滤出 words2 唯一的字符串
  let ans = 0;
  const word2Map = new Map<string, number>();
  for (const word of words2) {
    word2Map.set(word, (word2Map.get(word) ?? 0) + 1);
  }
  word2Map.forEach(count => {
    if (count === 1) {
      ans++;
    }
  });
  return ans;
}

export {};
