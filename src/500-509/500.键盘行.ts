const map = new Map<string, 1 | 2 | 3>();
for (const ch of "qwertyuiop") {
  map.set(ch, 1);
  map.set(ch.toUpperCase(), 1);
}
for (const ch of "asdfghjkl") {
  map.set(ch, 2);
  map.set(ch.toUpperCase(), 2);
}
for (const ch of "zxcvbnm") {
  map.set(ch, 3);
  map.set(ch.toUpperCase(), 3);
}

function findWords(words: string[]): string[] {
  let ans: string[] = [];

  for (const word of words) {
    const n = word.length;
    let first = map.get(word[0])!;
    let i = 1;
    for (; i < n; i++) {
      // 不在一行
      if (first !== map.get(word[i])) {
        break;
      }
    }

    if (i === n) {
      ans.push(word);
    }
  }

  return ans;
}

export { findWords };
