function numberOfSpecialChars(word: string): number {
  const counts = new Array<number>(26).fill(0);

  for (const c of word) {
    const code = c.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      counts[code - 65] |= 0b1;
    } else {
      counts[code - 97] |= 0b10;
    }
  }

  let ans = 0;
  for (let i = 0; i < 26; i++) {
    if ((counts[i] & 0b11) === 0b11) {
      ans++;
    }
  }

  return ans;
}

export { numberOfSpecialChars };
