function canAliceWin(n: number): boolean {
  let i = 0;
  let count = 10;
  while (n >= count) {
    i++;
    n -= count;
    count--;
  }
  return i % 2 !== 0;
}

export {};
