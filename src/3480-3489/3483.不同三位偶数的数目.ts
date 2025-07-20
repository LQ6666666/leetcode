function totalNumbers(digits: number[]): number {
  const n = digits.length;
  const set = new Set<number>();
  let path: number[] = [];
  const visits = new Array<0 | 1>(0);
  dfs();
  return set.size;

  function dfs() {
    if (path.length === 3) {
      const [a, b, c] = path;
      const num = a * 100 + b * 10 + c;
      if (num % 2 === 0) {
        set.add(num);
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visits[i] === 1) continue;

      const num = digits[i];

      if (path.length === 0 && num === 0) continue;

      path.push(num);
      visits[i] = 1;

      dfs();

      path.pop();
      visits[i] = 0;
    }
  }
}

export { totalNumbers };
