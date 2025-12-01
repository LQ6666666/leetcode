function maxRunTime(n: number, batteries: number[]): number {
  let left = 0;
  let right = Math.floor(batteries.reduce((memo, x) => memo + x, 0) / n);
  let ans = 0;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    let sum = 0;
    for (const b of batteries) {
      sum += Math.min(b, middle);
    }
    if (sum >= n * middle) {
      ans = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return ans;
}

export {};
