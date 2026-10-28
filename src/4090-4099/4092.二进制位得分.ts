function calculateScore(a: number, b: number): number {
  const s1 = helper(a);
  const s2 = helper(b);
  return s1 >= s2 ? s1 * s2 : Math.floor(s2 / s1);
}

function helper(n: number): number {
  let x = n;
  let count = 0;
  while (x) {
    count += x & 1;
    x >>= 1;
  }
  return count;
}

export {};
