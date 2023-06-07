function isPowerOfFour(n: number): boolean {
  if (n === 0) return false;

  let x = n;
  while (x % 4 === 0) {
    x = x / 4;
  }
  return x === 1;
}

export {};
