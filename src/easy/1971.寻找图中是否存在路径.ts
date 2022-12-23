function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const graph = new Map<number, number[]>();

  for (const [x, y] of edges) {
    const xValue = graph.get(x) ?? [];
    xValue.push(y);
    graph.set(x, xValue);

    const yValue = graph.get(y) ?? [];
    yValue.push(x);
    graph.set(y, yValue);
  }

  const visited = new Set<number>();
  return dfs(source);

  function dfs(form: number): boolean {
    if (form === destination) return true;
    const tos = graph.get(form) ?? [];

    visited.add(form);
    for (const next of tos) {
      if (!visited.has(next) && dfs(next)) {
        return true;
      }
    }

    return false;
  }
}

export {};
