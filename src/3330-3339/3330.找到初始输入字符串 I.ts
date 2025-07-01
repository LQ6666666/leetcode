function possibleStringCount(word: string): number {
  const n = word.length;
  let ans = 1;

  for (let i = 1; i < n; i++) {
    if (word[i] === word[i - 1]) {
      ans++;
    }
  }

  return ans;
}

export { possibleStringCount };
