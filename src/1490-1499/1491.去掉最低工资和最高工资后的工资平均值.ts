function average(salary: number[]): number {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (const value of salary) {
    sum += value;
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
  }

  return (sum - min - max) / (salary.length - 2);
}

export { average };
