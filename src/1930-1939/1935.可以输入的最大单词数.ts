function canBeTypedWords(text: string, brokenLetters: string): number {
  let ans = 0;

  const set = new Set(brokenLetters);
  const words = text.split(" ");
  for (const word of words) {
    let flag = 1;
    for (const letter of word) {
      if (set.has(letter)) {
        flag = 0;
        break;
      }
    }
    ans += flag;
  }
  return ans;
}

export { canBeTypedWords };
