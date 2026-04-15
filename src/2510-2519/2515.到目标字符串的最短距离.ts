function closestTarget(words: string[], target: string, startIndex: number): number {
  const n = words.length;
  let c1 = 0;
  let i = startIndex;
  while (c1 < n && words[i] !== target) {
    i = (i + 1) % n;
    c1++;
  }

  if (c1 === n) return -1;

  let c2 = 0;
  let j = startIndex;
  while (c2 < n && words[j] !== target) {
    j = (j - 1 + n) % n;
    c2++;
  }

  return Math.min(c1, c2);
}

export {};
