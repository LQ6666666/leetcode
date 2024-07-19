function minimumLevels(possible: number[]): number {
  possible = possible.map(p => (p === 0 ? -1 : 1));

  const n = possible.length;
  const prefix = new Array<number>(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + possible[i];
  }

  let i = 1;
  while (i < n) {
    const Alice = prefix[i] - prefix[0];
    const Bob = prefix[n] - prefix[i];

    if (Alice > Bob) {
      return i;
    }
    i++;
  }

  return -1;
}

export { minimumLevels };
