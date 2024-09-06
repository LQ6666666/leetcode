function numberOfChild(n: number, k: number): number {
  n--;
  const x = k % n;

  if (Math.floor(k / n) % 2 === 0) {
    return x;
  } else {
    return n - x;
  }
}

export {};
