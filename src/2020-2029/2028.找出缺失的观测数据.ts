function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const m = rolls.length;
  // 总投掷次数
  const count = m + n;
  // 已知投掷点数
  const known = rolls.reduce((prev, cur) => prev + cur, 0);
  // 总点数
  const total = count * mean;
  // 待分配点数
  const unknown = total - known;
  // edge case
  if (unknown > 6 * n || unknown < n) {
    return [];
  }

  // 平均待分配的点数
  let base = Math.floor(unknown / n);
  let remainder = unknown % n;

  const ans = new Array<number>(n).fill(base);
  for (let i = 0; remainder > 0; remainder--, i++) {
    ans[i]++;
  }

  return ans;
}

export { missingRolls };
