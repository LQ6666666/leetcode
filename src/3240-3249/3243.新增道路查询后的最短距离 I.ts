function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
  const graph = Array.from({ length: n - 1 }, (): number[] => []);
  const visits = new Array<number>(n - 1);
  for (let i = 0; i < n - 1; i++) {
    graph[i].push(i + 1);
  }

  const ans = new Array<number>(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [form, to] = queries[i];
    graph[form].push(to);
    ans[i] = bfs(i + 1);
  }

  return ans;

  function bfs(i: number): number {
    let queue: number[] = [0];
    let step = 1;
    while (queue.length) {
      const newQueue: number[] = [];

      for (const x of queue) {
        for (const y of graph[x]) {
          if (y === n - 1) {
            return step;
          }

          if (visits[y] != i) {
            visits[y] = i;
            newQueue.push(y);
          }
        }
      }

      step++;
      queue = newQueue;
    }
    return n;
  }
}

export { shortestDistanceAfterQueries };
