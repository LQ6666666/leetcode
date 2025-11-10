function decimalRepresentation(n: number): number[] {
  const ans: number[] = [];
  let d = 1;

  while (n > 0) {
    const num = d * (n % 10);
    if (num > 0) {
      ans.push(num);
    }
    n = Math.floor(n / 10);
    d *= 10;
  }

  ans.reverse();
  return ans;
}

export { decimalRepresentation };
