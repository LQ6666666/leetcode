function countDigits(num: number): number {
  let ans = 0;
  let x = num;
  while (x > 0) {
    if (num % (x % 10) === 0) {
      ans++;
    }

    x = Math.floor(x / 10);
  }

  return ans;
}

export { countDigits };
