function calculateTax(brackets: number[][], income: number): number {
  if (income == 0) return 0;

  const n = brackets.length;
  let ans = 0;

  let prevUpper = 0;
  for (let i = 0; i < n; i++) {
    const [upper, percent] = brackets[i];

    if (income > upper) {
      ans += (upper - prevUpper) * percent * 0.01;
      prevUpper = upper;
    } else {
      ans += (income - prevUpper) * percent * 0.01;
      return ans;
    }
  }

  return ans;
}

export { calculateTax };
