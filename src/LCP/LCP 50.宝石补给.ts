function giveGem(gem: number[], operations: number[][]): number {
  for (let i = 0; i < operations.length; i++) {
    const [x, y] = operations[i];
    const half = Math.floor(gem[x] / 2);
    gem[x] -= half;
    gem[y] += half;
  }

  const [max, min] = gem.reduce(
    ([max, min], num) => [Math.max(max, num), Math.min(min, num)],
    [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
  );

  return max - min;
}

export { giveGem };
