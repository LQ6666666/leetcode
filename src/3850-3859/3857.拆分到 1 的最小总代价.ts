function minCost(n: number): number {
  if (n === 1) return 0;

  const a = Math.floor(n / 2);
  const b = n - a;

  return a * b + minCost(a) + minCost(b);
}

export {};
