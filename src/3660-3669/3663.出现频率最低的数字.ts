function getLeastFrequentDigit(n: number): number {
  const counts = new Map<number, number>();
  while (n > 0) {
    const num = n % 10;
    counts.set(num, (counts.get(num) ?? 0) + 1);
    n = Math.floor(n / 10);
  }

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < 10; i++) {
    if (counts.has(i)) {
      min = Math.min(counts.get(i)!, min);
    }
  }
  for (let i = 0; i < 10; i++) {
    if (counts.get(i) === min) {
      return i;
    }
  }

  return 0;
}

export { getLeastFrequentDigit };
