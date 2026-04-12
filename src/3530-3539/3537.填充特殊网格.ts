function specialGrid(n: number): number[][] {
  const grid = Array.from({ length: 2 ** n }, () => new Array<number>(2 ** n));
  let val = 0;
  dfs(0, 2 ** n, 0, 2 ** n);
  return grid;

  function dfs(u: number, d: number, l: number, r: number) {
    if (d - u == 1) {
      grid[u][l] = val++;
      return;
    }
    const m = Math.floor((d - u) / 2);
    dfs(u, u + m, l + m, r);
    dfs(u + m, d, l + m, r);
    dfs(u + m, d, l, l + m);
    dfs(u, u + m, l, l + m);
  }
}

export {};
