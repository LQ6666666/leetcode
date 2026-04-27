function validDigit(n: number, x: number): boolean {
  let flag = false;
  let last = n;
  while (n) {
    const r = n % 10;
    if (r === x) {
      flag = true;
    }
    last = r;
    n = Math.floor(n / 10);
  }
  return flag && last !== x;
}

export {};
