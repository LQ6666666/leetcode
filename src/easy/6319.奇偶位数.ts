function evenOddBit(n: number): number[] {
  const arr: number[] = [];
  let x = n;

  while (x) {
    arr.push(x % 2);
    x = Math.floor(x / 2);
  }

  let even = 0;
  let odd = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 1) {
      if (i % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
  }
  return [even, odd];
}

export {};
