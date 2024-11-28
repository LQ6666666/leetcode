function maximumNumberOfStringPairs$(words: string[]): number {
  const set = new Set<string>();
  let ans = 0;
  for (const word of words) {
    const reverse = reverseWord(word);
    if (set.has(reverse)) {
      ans++;
    }
    set.add(word);
  }
  return ans;
}

function reverseWord(word: string) {
  let ans = "";
  for (const ch of word) {
    ans = ch + ans;
  }
  return ans;
}

function maximumNumberOfStringPairs(words: string[]): number {
  const set = new Set<string>();
  let ans = 0;
  for (const word of words) {
    if (set.has(word[1] + word[0])) {
      ans++;
    }
    set.add(word);
  }
  return ans;
}

export { maximumNumberOfStringPairs };
