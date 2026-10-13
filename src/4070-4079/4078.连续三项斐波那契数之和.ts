function threeFibonacciSum(n: number): boolean {
  let a = 0;
  let b = 1;

  for (let i = 0; i < 100; i++) {
    const c = a + b;
    if (a + b + c === n) {
      return true;
    }
    a = b;
    b = c;
  }

  return false;
}

export {};
