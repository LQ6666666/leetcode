function minReorder(n: number, connections: number[][]): number {
  const g = Array.from<number, [city: number, direction: number][]>({ length: n }, () => []);
  for (const [x, y] of connections) {
    g[x].push([y, 1]);
    g[y].push([x, 0]);
  }
  return dfs(0, -1);

  function dfs(x: number, parent: number): number {
    let result = 0;

    for (const [city, direction] of g[x]) {
      if (city === parent) continue;

      result += direction + dfs(city, x);
    }

    return result;
  }
}

export { minReorder };
