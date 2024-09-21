function edgeScore(edges: number[]): number {
  const n = edges.length;
  const scores = new Array<number>(n).fill(0);
  let max = 0;

  for (let i = 0; i < n; i++) {
    const edge = edges[i];
    scores[edge] += i;

    max = Math.max(max, scores[edge]);
  }

  for (let i = 0; i < n; i++) {
    if (scores[i] === max) {
      return i;
    }
  }

  return 0;
}

export { edgeScore };
