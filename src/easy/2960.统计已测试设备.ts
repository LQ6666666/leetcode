function countTestedDevices(batteryPercentages: number[]): number {
  const n = batteryPercentages.length;

  let ans = 0;
  for (let i = 0; i < n; i++) {
    batteryPercentages[i] = Math.max(0, batteryPercentages[i] - ans);
    if (batteryPercentages[i] == 0) continue;
    ans++;
  }
  return ans;
}

export {};
