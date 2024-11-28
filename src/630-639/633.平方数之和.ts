function judgeSquareSum$(c: number): boolean {
  let left = 0,
    right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === c) {
      return true;
    } else if (sum > c) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

function judgeSquareSum(c: number): boolean {
  for (let a = 0; a * a <= c; a++) {
    const b = Math.sqrt(c - a * a);
    if (b === Number.parseInt(b as any)) {
      return true;
    }
  }

  return false;
}

export { judgeSquareSum };
