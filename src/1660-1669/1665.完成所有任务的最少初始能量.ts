function minimumEffort(tasks: number[][]): number {
  tasks.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));

  let ans = 0;
  let s = 0;
  for (const [actual, minimum] of tasks) {
    ans = Math.max(ans, s + minimum);
    s += actual;
  }

  return ans;
}

export {};
