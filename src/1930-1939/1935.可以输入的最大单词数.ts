function canBeTypedWords(text: string, brokenLetters: string): number {
  let ans = 0;
  const wordSets = text.split(" ").map(word => new Set(word));
  for (const set of wordSets) {
    let f = 1;
    for (const brokenLetter of brokenLetters) {
      if (set.has(brokenLetter)) {
        f = 0;
        break;
      }
    }
    ans += f;
  }
  return ans;
}

export { canBeTypedWords };
