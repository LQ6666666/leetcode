function minDays(n: number): number {
  const map = new Map<number, number>();
  function dfs(x: number): number {
    if (x <= 1) return 1;

    const exist = map.get(x);
    if (exist !== undefined) return exist;

    // 考虑离 x 最近的 3 的整数倍，走到 3 的这几步路就一步一步走所以加上 n%3
    // 同理，离 x 最近的 2 的整数倍
    const result = Math.min(dfs(Math.floor(x / 2)) + (x % 2), dfs(Math.floor(x / 3)) + (x % 3)) + 1;

    map.set(x, result);
    return result;
  }

  return dfs(n);
}

export { minDays };
