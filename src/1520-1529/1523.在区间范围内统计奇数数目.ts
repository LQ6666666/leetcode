function pre(num: number): number {
  return (num + 1) >> 1;
}

function countOdds(low: number, high: number): number {
  return pre(high) - pre(low - 1);
}

export {};
