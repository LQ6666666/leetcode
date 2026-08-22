function leastInterval(tasks: string[], n: number): number {
  const counts = new Array<number>(26).fill(0);

  for (const task of tasks) {
    counts[task.charCodeAt(0) - 65]++;
  }

  let tot = 0;
  const max = Math.max(...counts);
  for (let i = 0; i < 26; i++) {
    tot += max === counts[i] ? 1 : 0;
  }

  return Math.max(tasks.length, (n + 1) * (max - 1) + tot);
}

export { leastInterval };
