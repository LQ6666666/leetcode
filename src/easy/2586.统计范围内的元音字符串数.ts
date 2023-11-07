const vowelSet = new Set("aeiou");

function vowelStrings(words: string[], left: number, right: number): number {
  let ans = 0;
  for (let i = left; i <= right; i++) {
    const word = words[i];
    if (vowelSet.has(word[0]) && vowelSet.has(word[word.length - 1])) {
      ans++;
    }
  }
  return ans;
}

export { vowelStrings };
