function maxSumDistinctTriplet(x: number[], y: number[]): number {
  const n = x.length;
  const map = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    const value = map.get(x[i]);
    if (value === undefined) {
      map.set(x[i], y[i]);
    } else {
      map.set(x[i], Math.max(value, y[i]));
    }
  }

  if (map.size < 3) return -1;

  const [a, b, c] = Array.from(map.values()).sort((a, b) => b - a);
  return a + b + c;
}

export {};
