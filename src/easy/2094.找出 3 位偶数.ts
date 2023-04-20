function findEvenNumbers(digits: number[]): number[] {
  const set = new Set<number>();
  const n = digits.length;

  for (let i = 0; i < n; i++) {
    const a = digits[i];
    if (a === 0) continue;
    for (let j = 0; j < n; j++) {
      const b = digits[j];
      for (let k = 0; k < n; k++) {
        const c = digits[k];
        if (i === j || j === k || i === k) {
          continue;
        }

        const num = a * 100 + b * 10 + c;
        if (num >= 100 && num % 2 === 0) {
          set.add(num);
        }
      }
    }
  }

  return Array.from(set).sort((a, b) => a - b);
}

export {};
