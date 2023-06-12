function minimumSwitchingTimes(source: number[][], target: number[][]): number {
  const countMap = new Map<number, number>();
  const n = source.length;
  const m = source[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const value = source[i][j];
      countMap.set(value, (countMap.get(value) ?? 0) + 1);
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const value = target[i][j];
      const count = countMap.get(value) ?? 0;
      if (count > 0) {
        countMap.set(value, count - 1);
      } else {
        ans++;
      }
    }
  }

  return ans;
}

export {};
