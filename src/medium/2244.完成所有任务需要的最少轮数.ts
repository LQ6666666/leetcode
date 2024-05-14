function minimumRounds(tasks: number[]): number {
  const map = new Map<number, number>();
  for (const task of tasks) {
    map.set(task, (map.get(task) ?? 0) + 1);
  }

  let ans = 0;
  const keys = Array.from(map.keys());
  for (const key of keys) {
    const count = map.get(key)!;
    if (count >= 3) {
      if (count % 3 === 0) {
        ans += count / 3;
      } else if (count % 3 === 1) {
        ans += Math.floor(count / 3) + 1;
      } else if (count % 3 === 2) {
        ans += Math.floor(count / 3) + 1;
      }
    } else if (count === 2) {
      ans++;
    } else if (count === 1) {
      return -1;
    }
  }

  return ans;
}

export { minimumRounds };
