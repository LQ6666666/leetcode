function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 入度数组
  const inDegree = new Array<number>(numCourses).fill(0);
  // key 课号, value 依赖这门课的后续课
  const map = new Map<number, number[]>();
  for (let i = 0; i < prerequisites.length; i++) {
    // 学 prerequisites[i][0], 要先学 prerequisites[i][1]
    // no 依赖 depNo
    const [no, depNo] = prerequisites[i];
    // 依赖它的后续课的入度数量, 为 0 就能学了
    inDegree[no]++;
    // depNo 后才能上的课的列表
    const deps = map.get(depNo) ?? [];
    deps.push(no);
    map.set(depNo, deps);
  }
  // 所有入度为 0 的课入列
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length) {
    const selected = queue.shift()!;
    count++;
    // 依赖这个课的才能上的课的列表
    const toEnQueue = map.get(selected);
    if (toEnQueue && toEnQueue.length > 0) {
      for (const no of toEnQueue) {
        // 依赖它的后续课的入度 -1, 为 0 就能学了
        inDegree[no]--;
        // 如果因此减为 0, 入列
        if (inDegree[no] === 0) {
          queue.push(no);
        }
      }
    }
  }

  // 选了的课等于总课数, true 否则 false
  return count === numCourses;
}

export {};
