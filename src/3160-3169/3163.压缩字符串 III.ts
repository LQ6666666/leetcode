function compressedString(word: string): string {
  const n = word.length;

  let comp = "";
  let i = 0;

  while (i < n) {
    const c = word[i];
    let j = i + 1;
    while (j < n && j - i < 9 && c === word[j]) {
      j++;
    }

    comp += `${j - i}${c}`;
    i = j;
  }

  return comp;
}

export { compressedString };
