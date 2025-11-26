import { MOD } from "@/utils";

function numberOfPaths(grid: number[][], k: number): number {
  const m = grid.length;
  const n = grid[0].length;
  const memo = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => new Array<number>(k).fill(-1))
  );
  return dfs(m - 1, n - 1, 0);

  function dfs(i: number, j: number, s: number): number {
    if (i < 0 || j < 0) return 0;
    // 保证模 k 结果非负
    const preS = (((s - grid[i][j]) % k) + k) % k;
    if (i === 0 && j === 0) {
      // preS == 0 说明 s == grid[i][j] % k
      return preS === 0 ? 1 : 0;
    }

    if (memo[i][j][s] !== -1) return memo[i][j][s];
    const a = dfs(i - 1, j, preS);
    const b = dfs(i, j - 1, preS);

    return (memo[i][j][s] = (a + b) % MOD);
  }
}

export { numberOfPaths };
