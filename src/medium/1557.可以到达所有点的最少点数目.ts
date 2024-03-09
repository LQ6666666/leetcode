function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  const set = new Set<number>();
  for (const [from, to] of edges) {
    set.add(to);
  }

  let ans: number[] = [];
  for (let i = 0; i < n; i++) {
    if (!set.has(i)) {
      ans.push(i);
    }
  }

  return ans;
}

export { findSmallestSetOfVertices };
