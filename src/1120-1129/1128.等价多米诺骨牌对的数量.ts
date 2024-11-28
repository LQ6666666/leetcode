function numEquivDominoPairs$(dominoes: number[][]): number {
  const n = dominoes.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [a, b] = dominoes[i];
      const [c, d] = dominoes[j];
      if ((a == c && b == d) || (a == d && b == c)) {
        ans++;
      }
    }
  }

  return ans;
}

function numEquivDominoPairs(dominoes: number[][]): number {
  const n = dominoes.length;
  let ans = 0;

  const counts = new Array<number>(100).fill(0);
  for (let i = 0; i < n; i++) {
    const [a, b] = dominoes[i];
    const value = a > b ? a * 10 + b : b * 10 + a;
    ans += counts[value];
    counts[value]++;
  }

  return ans;
}

export { numEquivDominoPairs };
