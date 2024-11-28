function findMinHeightTrees(n: number, edges: number[][]): number[] {
  let ans: number[] = [];
  // 如果只有一个节点，那么他就是最小高度树
  if (n === 1) {
    ans.push(0);
    return ans;
  }

  // 建立各个节点的出度表
  const degree = new Array<number>(n).fill(0);
  // 建立图关系，在每个节点的 list 中存储相连节点
  const map = Array.from<number, number[]>({ length: n }, () => []);

  for (const [from, to] of edges) {
    // 出度++
    degree[from]++;
    degree[to]++;
    // 添加相邻节点
    map[from].push(to);
    map[to].push(from);
  }

  // 建立队列
  let queue: number[] = [];
  // 把所有出度为 1 的节点，也就是叶子节点入队
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      queue.push(i);
    }
  }

  while (queue.length !== 0) {
    ans = [];
    const newQueue: number[] = [];
    for (const node of queue) {
      ans.push(node);
      // 越是靠里面的节点越有可能是最小高度树
      // 把原来的图给剪掉一圈叶子节点，形成一个缩小的新的图
      const neighbors = map[node];
      for (const neighbor of neighbors) {
        degree[neighbor]--;
        if (degree[neighbor] === 1) {
          // 如果是叶子节点我们就入队
          newQueue.push(neighbor);
        }
      }
    }
    queue = newQueue;
  }

  return ans;
}

export {};
