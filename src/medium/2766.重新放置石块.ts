function relocateMarbles(nums: number[], moveFrom: number[], moveTo: number[]): number[] {
  const n = moveFrom.length;

  const set = new Set<number>(nums);

  for (let i = 0; i < n; i++) {
    set.delete(moveFrom[i]);
    set.add(moveTo[i]);
  }

  return Array.from(set).sort((a, b) => a - b);
}

export { relocateMarbles };
