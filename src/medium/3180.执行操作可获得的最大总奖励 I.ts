// function maxTotalReward(rewardValues: number[]): number {
//   const n = rewardValues.length;
//   rewardValues.sort((a, b) => a - b);

//   function dfs(i: number, sum: number): number {
//     if (i === n) return sum;

//     let result = dfs(i + 1, sum);
//     if (rewardValues[i] > sum) {
//       result = Math.max(result, dfs(i + 1, sum + rewardValues[i]));
//     }

//     return result;
//   }

//   return dfs(0, 0);
// }

function maxTotalReward(rewardValues: number[]): number {
  const n = rewardValues.length;
  rewardValues.sort((a, b) => a - b);
  const dp = Array.from({ length: n + 1 }, () => new Array<number>(4000).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    const x = rewardValues[i];
    for (let j = 3999; j >= 0; j--) {
      if (rewardValues[i] > j) {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j + x] + x);
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }

  return dp[0][0];
}

export { maxTotalReward };
