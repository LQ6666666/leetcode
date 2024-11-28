function oddString(words: string[]): string {
  const n = words.length;
  const map = new Map<string, [number, number]>();

  for (let i = 0; i < n; i++) {
    const key = helper(words[i]).toString();
    const count = (map.get(key) ?? [0])[0];
    map.set(key, [count + 1, i]);
  }

  for (const [count, index] of map.values()) {
    if (count === 1) {
      return words[index];
    }
  }

  return words[0];
}

function helper(word: string) {
  const n = word.length;
  const length = n - 1;
  const difference = new Array<number>(length);
  for (let i = 0; i < length; i++) {
    difference[i] = word[i + 1].charCodeAt(0) - word[i].charCodeAt(0);
  }
  return difference;
}

export { oddString };
