function closetTarget(words: string[], target: string, startIndex: number): number {
  const extendsWords = words.concat(words);
  const n = words.length;
  const m = n * 2;

  let after = -1;
  for (let i = startIndex; i < m; i++) {
    if (target === extendsWords[i]) {
      after = i - startIndex;
      break;
    }
  }

  let before = -1;
  for (let i = startIndex + n + 1; i >= 0; i--) {
    if (target === extendsWords[i]) {
      before = startIndex + n - i;
      break;
    }
  }

  if (after === -1 && before === -1) return -1;

  if (after === -1) {
    return before;
  } else if (before === -1) {
    return after;
  } else {
    return Math.min(after, before);
  }
}

export {};
