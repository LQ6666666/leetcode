function integerReplacement(x: number): number {
  return helper(x);

  function helper(n: number): number {
    if (n === 1) return 0;

    let result: number;

    if (n % 2 === 0) {
      result = helper(n / 2);
    } else {
      result = Math.min(helper(n + 1), helper(n - 1));
    }

    return result + 1;
  }
}

export { integerReplacement };
