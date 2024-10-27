function findRedundantConnection(edges: number[][]): number[] {
  const n = edges.length;
  const parent = Array.from({ length: n + 1 }, (_, index) => index);

  for (let i = 0; i < n; i++) {
    const [a, b] = edges[i];
    if (find(parent, a) === find(parent, b)) {
      return edges[i];
    } else {
      parent[find(parent, a)] = parent[find(parent, b)];
    }
  }

  return edges[0];
}

function find(parent: number[], index: number) {
  if (parent[index] !== index) {
    parent[index] = find(parent, parent[index]);
  }
  return parent[index];
}

export { findRedundantConnection };
