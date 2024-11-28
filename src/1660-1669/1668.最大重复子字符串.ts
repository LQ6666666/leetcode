function maxRepeating(sequence: string, word: string): number {
  const n = sequence.length;
  const m = word.length;
  let ans: number = 0;

  // 找到第一个 word
  let idx = sequence.indexOf(word, 0);

  if (idx === -1) return ans;
  ans++;
  idx += m;

  while (idx < n) {
    for (let i = 0; i < m; i++) {
      if (sequence[i + idx] !== word[i]) {
        return Math.max(ans, maxRepeating(sequence.slice(idx + (idx - 1 === 0 ? 1 : -1)), word));
      }
    }

    idx += m;
    ans++;
  }

  return ans;
}

export {};
