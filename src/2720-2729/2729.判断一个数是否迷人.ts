function isFascinating(n: number): boolean {
  const set = new Set<number>();

  const arr = helper(n * 3)
    .concat(helper(n * 2))
    .concat(helper(n));

  for (const num of arr) {
    if (num === 0) {
      return false;
    }
    if (set.has(num)) return false;

    set.add(num);
  }

  return set.size === 9;
}

function helper(num: number): number[] {
  const result: number[] = [];

  if (num === 0) {
    result.push(0);
    return result;
  }

  while (num > 0) {
    result.push(num % 10);
    num = Math.floor(num / 10);
  }

  return result;
}

export { isFascinating };
