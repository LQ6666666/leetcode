function numTilePossibilities(tiles: string): number {
  const counts = new Map<string, number>();
  for (const t of tiles) {
    counts.set(t, (counts.get(t) ?? 0) + 1);
  }

  const tile = Array.from(counts.keys());
  const n = tiles.length;

  function dfs(i: number) {
    if (i === n) return 1;

    let result = 1;
    for (const t of tile) {
      if (counts.get(t)! > 0) {
        counts.set(t, counts.get(t)! - 1);
        result += dfs(i + 1);
        counts.set(t, counts.get(t)! + 1);
      }
    }

    return result;
  }

  return dfs(0) - 1;
}

export { numTilePossibilities };
