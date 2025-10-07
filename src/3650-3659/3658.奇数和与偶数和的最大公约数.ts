function gcdOfOddEvenSums(n: number): number {
  let sumOdd = 0;
  let sumEven = 0;
  let i = 0;
  let o = 1;
  let e = 2;
  while (i < n) {
    sumOdd += o;
    sumEven += e;
    o += 2;
    e += 2;
    i++;
  }
  return gcd(sumOdd, sumEven);
}

function gcd(x: number, y: number): number {
  return y === 0 ? x : gcd(y, x % y);
}

export { gcdOfOddEvenSums };
