function mirrorDistance(n: number): number {
  let r = 0;
  let x = n;
  while (x > 0) {
    r = r * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return Math.abs(n - r);
}

export {};
