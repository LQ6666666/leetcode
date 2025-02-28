function sequentialDigits(low: number, high: number): number[] {
  const ans: number[] = [];

  for (let i = 1; i <= 9; i++) {
    let num = i;
    for (let j = i + 1; j <= 9; j++) {
      num = num * 10 + j;
      if (num >= low && num <= high) {
        ans.push(num);
      }
    }
  }

  ans.sort((a, b) => a - b);

  return ans;
}

export { sequentialDigits };
