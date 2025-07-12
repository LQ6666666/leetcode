function getValidT9Words(num: string, words: string[]): string[] {
  const keys = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9];
  const n = num.length;
  const ans: string[] = [];

  for (const word of words) {
    let i = 0;
    for (; i < n; i++) {
      if (+num[i] !== keys[word.charCodeAt(i) - 97]) {
        break;
      }
    }

    if (i === n) {
      ans.push(word);
    }
  }

  return ans;
}

export { getValidT9Words };
