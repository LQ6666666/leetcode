function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
  const map = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const parentId = manager[i];
    const parent = map.get(parentId) ?? [];
    parent.push(i);
    map.set(parentId, parent);
  }

  let queue = [[headID, informTime[headID]]];
  let ans = 0;

  while (queue.length) {
    const newQueue: [number, number][] = [];
    for (const [item, time] of queue) {
      const children = map.get(item);
      ans = Math.max(ans, time);

      if (children !== undefined) {
        for (const child of children) {
          newQueue.push([child, time + informTime[child]]);
        }
      }
    }

    queue = newQueue;
  }

  return ans;
}

export {};
