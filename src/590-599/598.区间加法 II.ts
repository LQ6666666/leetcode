function maxCount(m: number, n: number, ops: number[][]): number {
  let a = m;
  let b = n;

  for (const [x, y] of ops) {
    a = Math.min(a, x);
    b = Math.min(b, y);
  }

  return a * b;
}

export { maxCount };
