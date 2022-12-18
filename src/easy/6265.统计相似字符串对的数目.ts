function similarPairs(words: string[]): number {
  const n = words.length;
  const formatWords = new Array(n);

  for (let i = 0; i < n; i++) {
    const word = words[i];
    const array = new Array<number>(26).fill(0);
    for (const ch of word) {
      array[ch.charCodeAt(0) - 97] = 1;
    }
    formatWords[i] = array.toString();
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (formatWords[i] === formatWords[j]) {
        ans++;
      }
    }
  }

  return ans;
}

export { similarPairs };
