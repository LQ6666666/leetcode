function numberOfBeams(bank: string[]): number {
  const m = bank.length;
  const n = bank[0].length;

  let ans = 0;
  let d = 0;
  for (let i = 0; i < m; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (bank[i][j] === "1") {
        count++;
      }
    }

    ans += d * count;

    if (count !== 0) {
      d = count;
    }
  }

  return ans;
}

export { numberOfBeams };
