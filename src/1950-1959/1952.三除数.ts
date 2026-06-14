function isThree(n: number): boolean {
  let count = 0;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      count++;
    }
    if (count > 1) {
      return false
    }
  }
  return count === 1;
}

export {};
