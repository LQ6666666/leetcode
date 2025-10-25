function smallestNumber(n: number, t: number): number {
  for (let i = n; i <= 100; i++) {
    let x = i;
    let s = 1;
    while (x > 0) {
      s *= x % 10;
      x = Math.floor(x / 10);
    }
    if (s % t === 0) {
      return i;
    }
  }

  return -1;
}

export { smallestNumber };
