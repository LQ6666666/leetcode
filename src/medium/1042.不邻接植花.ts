function gardenNoAdj(n: number, paths: number[][]): number[] {
  const map = new Map<number, Set<number>>();
  for (const [from, to] of paths) {
    const a = map.get(from) ?? new Set<number>();
    a.add(to);
    map.set(from, a);

    const b = map.get(to) ?? new Set<number>();
    b.add(from);
    map.set(to, b);
  }

  const ans = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    const paths = Array.from(map.get(i + 1) ?? []);
    const typeSet = new Set([1, 2, 3, 4]);
    for (const path of paths) {
      typeSet.delete(ans[path - 1]);
    }
    ans[i] = typeSet.values().next().value as number;
  }

  return ans;
}

export {};
