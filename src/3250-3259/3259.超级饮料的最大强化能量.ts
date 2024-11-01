function maxEnergyBoost(energyDrinkA: number[], energyDrinkB: number[]): number {
  const n = energyDrinkA.length;
  const dp: [number, number][] = Array.from({ length: n }, () => [0, 0]);

  dp[0][0] = energyDrinkA[0];
  dp[0][1] = energyDrinkB[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + energyDrinkA[i];
    dp[i][1] = dp[i - 1][1] + energyDrinkB[i];

    if (i >= 2) {
      dp[i][0] = Math.max(dp[i][0], dp[i - 2][1] + energyDrinkA[i]);
      dp[i][1] = Math.max(dp[i][1], dp[i - 2][0] + energyDrinkB[i]);
    }
  }

  return Math.max(...dp[n - 1]);
}

export { maxEnergyBoost };
