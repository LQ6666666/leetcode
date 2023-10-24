const MOD = 1_000_000_007;

function numRollsToTarget(n: number, k: number, target: number): number {
  // 无法组成 target
  if (target < n || target > n * k) return 0;

  // -1 表示没有计算过
  const memo: number[][] = Array.from({ length: n + 1 }, () =>
    new Array<number>(target + 1).fill(-1)
  );

  return dfs(n, target);

  /**
   * 递归
   * @param i 剩下筛子的数量
   * @param j 还差多少到目标和
   * @param k 筛子有多少面
   */
  function dfs(i: number, j: number): number {
    if (i === 0) return j === 0 ? 1 : 0;
    if (memo[i][j] !== -1) return memo[i][j];

    let result = 0;
    for (let x = 1; x <= k && j - x >= 0; x++) {
      result = (result + dfs(i - 1, j - x)) % MOD;
    }
    return (memo[i][j] = result);
  }
}

export { numRollsToTarget };
