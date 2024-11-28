function percentageLetter(s: string, letter: string): number {
  const n = s.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === letter) {
      count++;
    }
  }
  return Math.floor((count * 100) / n);
}

export {};
