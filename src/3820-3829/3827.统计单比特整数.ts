function countMonobit(n: number): number {
  let i = 1;
  while (Math.pow(2, i) - 1 <= n) {
    i++;
  }
  return i;
}

export {};
