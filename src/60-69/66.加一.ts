function plusOne(digits: number[]): number[] {
  const n = digits.length;
  digits[n - 1] += 1;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      } else {
        digits[i - 1]++;
      }
    }
  }

  return digits;
}

export { plusOne };
