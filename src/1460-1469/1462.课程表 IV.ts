function checkIfPrerequisite(
  numCourses: number,
  prerequisites: number[][],
  queries: number[][]
): boolean[] {
  const inDegree = new Array(numCourses).fill(0);
  const map = new Map<number, number[]>();
  for (let i = 0; i < prerequisites.length; i++) {
    const [depNo, no] = prerequisites[i];
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

  const isPre: boolean[][] = Array.from({ length: numCourses }, () =>
    new Array(numCourses).fill(false)
  );

  while (queue.length) {
    const selected = queue.shift()!;

    const toEnQueue = map.get(selected);
    if (toEnQueue && toEnQueue.length) {
      for (const no of toEnQueue) {
        isPre[selected][no] = true;

        for (let i = 0; i < numCourses; i++) {
          isPre[i][no] = isPre[i][no] || isPre[i][selected];
        }

        inDegree[no]--;
        if (inDegree[no] === 0) {
          queue.push(no);
        }
      }
    }
  }

  const ans: boolean[] = [];
  for (const query of queries) {
    ans.push(isPre[query[0]][query[1]]);
  }
  return ans;
}

export {};
