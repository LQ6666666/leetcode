function minimumFuelCost(roads: number[][], seats: number): number {
  let ans = 0;
  const map = new Map<number, number[]>();
  for (const [x, y] of roads) {
    const xValue = map.get(x) ?? [];
    xValue.push(y);
    map.set(x, xValue);

    const yValue = map.get(y) ?? [];
    yValue.push(x);
    map.set(y, yValue);
  }

  dfs(0, -1);
  return ans;

  function dfs(to: number, form: number) {
    let count = 0;
    const arr = map.get(to) ?? [];

    for (const item of arr) {
      if (item === form) continue;

      count += dfs(item, to);
    }

    count++;
    if (to !== 0) {
      ans += Math.floor((count + (seats - 1)) / seats);
    }

    return count;
  }
}

export {};
