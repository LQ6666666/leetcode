function countBalls(lowLimit: number, highLimit: number): number {
  const map = new Map<number, number>();
  let ans = 0;

  for (let i = lowLimit; i <= highLimit; i++) {
    let x = i;
    let num = 0;
    while (x > 0) {
      num += x % 10;
      x = Math.floor(x / 10);
    }

    const count = (map.get(num) ?? 0) + 1;
    ans = Math.max(ans, count);
    map.set(num, count);
  }

  return ans;
}

export { countBalls };
