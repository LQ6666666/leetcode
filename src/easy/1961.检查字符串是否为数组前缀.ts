function isPrefixString(s: string, words: string[]): boolean {
  const n = s.length;

  let i = 0;
  let j = 0;
  let z = 0;
  while (i < n && j < words.length) {
    if (s[i] === words[j][z]) {
      z++;
    } else {
      return false;
    }

    i++;

    if (i === n) {
      return z === words[j].length;
    }

    if (z === words[j].length) {
      j++;
      z = 0;
    }
  }

  return i === n;
}

export {};
