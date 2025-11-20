function plusOne(digits: number[]): number[] {
  const n = digits.length;

  digits[n - 1]++;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] >= 10) {
      digits[i] %= 10;
      if (i - 1 >= 0) {
        digits[i - 1]++;
      } else {
        digits.unshift(1);
      }
    } else {
      break;
    }
  }

  return digits;
}

export { plusOne };
