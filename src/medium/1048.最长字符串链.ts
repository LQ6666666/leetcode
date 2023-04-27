function longestStrChain(words: string[]): number {
  const counts = new Map<string, number>();
  words.sort((a, b) => a.length - b.length);
  let ans = 0;

  for (const word of words) {
    counts.set(word, 1);
    for (let i = 0; i < word.length; i++) {
      // 依次尝试去掉 words[i] 中的每个字符，并构成其可能的前身 prev
      const prev = word.slice(0, i) + word.slice(i + 1);
      if (counts.has(prev)) {
        counts.set(word, Math.max(counts.get(word)!, counts.get(prev)! + 1));
      }
    }
    ans = Math.max(ans, counts.get(word)!);
  }

  return ans;
}

export {};
