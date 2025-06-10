function maxDifference(s: string): number {
  const counts = new Array<number>(26).fill(0);
  const n = s.length;
  for (let i = 0; i < n; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }

  let evenMin = Number.MAX_SAFE_INTEGER;
  let oddMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < 26; i++) {
    const count = counts[i];
    if (count === 0) continue;

    if (count % 2 === 0) {
      evenMin = Math.min(evenMin, count);
    } else {
      oddMax = Math.max(oddMax, count);
    }
  }

  return oddMax - evenMin;
}

export { maxDifference };
