function isCovered(ranges: number[][], left: number, right: number): boolean {
  const set = new Set<number>();
  for (let i = left; i <= right; i++) {
    set.add(i);
  }

  for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
      set.delete(i);
    }
  }

  return set.size === 0;
}


export { isCovered };
