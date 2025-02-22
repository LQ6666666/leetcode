function similarPairs(words: string[]): number {
  const n = words.length;

  const arr = new Array<number>(n);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let num = 0;
    for (const ch of word) {
      const x = ch.charCodeAt(0) - 97;
      num |= 1 << x;
    }
    arr[i] = num;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        ans++;
      }
    }
  }
  return ans;
}

export { similarPairs };
