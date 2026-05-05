function numSquares(n: number): number {
  const f = new Array<number>(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, f[i - j * j]);
    }
    f[i] = min + 1;
  }
  return f[n];
}

export {};
