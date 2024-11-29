function taskSchedulerII(tasks: number[], space: number): number {
  const map = new Map<number, number>();
  let day = 0;
  for (const task of tasks) {
    day++;
    if (map.has(task)) {
      day = Math.max(day, map.get(task)! + space + 1);
    }
    map.set(task, day);
  }
  return day;
}

export { taskSchedulerII };
