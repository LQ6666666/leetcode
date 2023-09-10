function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const inDegree = new Array(numCourses).fill(0);
  const map = new Map<number, number[]>();
  for (let i = 0; i < prerequisites.length; i++) {
    const [no, depNo] = prerequisites[i];
    inDegree[no]++;
    const deps = map.get(depNo) ?? [];
    deps.push(no);
    map.set(depNo, deps);
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  const ans = new Array<number>(numCourses);
  while (queue.length) {
    const selected = queue.shift()!;
    ans[count++] = selected;

    const toEnQueue = map.get(selected);
    if (toEnQueue && toEnQueue.length > 0) {
      for (let i = 0; i < toEnQueue.length; i++) {
        const no = toEnQueue[i];
        inDegree[no]--;
        if (inDegree[no] === 0) {
          queue.push(no);
        }
      }
    }
  }

  return count === numCourses ? ans : [];
}

export { findOrder };
