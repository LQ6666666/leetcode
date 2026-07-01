function consecutiveSetBits(n: number): boolean {
  let count = 0;
  while (n > 1) {
    if ((n & 3) === 3) {
      count++;
    }
    n >>= 1;
  }
  return count === 1;
}

export {};
