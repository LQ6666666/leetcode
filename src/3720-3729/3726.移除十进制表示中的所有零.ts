function removeZeros(n: number): number {
  let x = n;
  let ans = 0;
  let k = 1;

  while (x) {
    const num = x % 10;
    if (num > 0) {
      ans += num * k;
      k *= 10;
    }

    x = Math.floor(x / 10);
  }

  return ans;
}

export { removeZeros };
