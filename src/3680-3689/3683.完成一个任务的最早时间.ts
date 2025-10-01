function earliestTime(tasks: number[][]): number {
  const n = tasks.length;
  let ans = tasks[0][0] + tasks[0][1];
  for (let i = 1; i < n; i++) {
    ans = Math.min(tasks[i][0] + tasks[i][1], ans);
  }
  return ans;
}

export { earliestTime };
