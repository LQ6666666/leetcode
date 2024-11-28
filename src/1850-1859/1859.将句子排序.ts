function sortSentence(s: string): string {
  const sArr = s.split(" ");
  const map = new Map<number, string>();
  for (let word of sArr) {
    const order = word.slice(-1);
    word = word.slice(0, -1);
    map.set(+order, word);
  }

  let ans = "";
  for (let i = 1; i < 10; i++) {
    const word = map.get(i);
    if (word) {
      ans += word + " ";
    }
  }

  return ans.slice(0, -1);
}

export { sortSentence };
