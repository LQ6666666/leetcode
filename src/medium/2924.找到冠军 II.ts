function findChampion(n: number, edges: number[][]): number {
  const set = new Set<number>();
  for (let i = 0; i < n; i++) {
    set.add(i);
  }

  for (const [, to] of edges) {
    set.delete(to);
  }

  return set.size === 1 ? set.values().next().value : -1;
}

export { findChampion };
