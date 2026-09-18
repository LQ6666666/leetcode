function mostVisited(n: number, rounds: number[]): number[] {
  const ret: number[] = [];
  const start = rounds[0];
  const end = rounds[rounds.length - 1];
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      ret.push(i);
    }
  } else {
    // 由于题目要求按扇区大小排序，因此我们要将区间分成两部分
    for (let i = 1; i <= end; i++) {
      ret.push(i);
    }
    for (let i = start; i <= n; i++) {
      ret.push(i);
    }
  }
  return ret;
}

export {};
