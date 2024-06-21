function temperatureTrend(temperatureA: number[], temperatureB: number[]): number {
  const n = temperatureA.length;

  let ans = 0;
  let temp = 0;
  for (let i = 1; i < n; i++) {
    const a =
      temperatureA[i - 1] === temperatureA[i] ? 0 : temperatureA[i - 1] > temperatureA[i] ? 1 : -1;
    const b =
      temperatureB[i - 1] === temperatureB[i] ? 0 : temperatureB[i - 1] > temperatureB[i] ? 1 : -1;

    if (a === b) {
      temp++;
      ans = Math.max(temp, ans);
    } else {
      temp = 0;
    }
  }

  return ans;
}

export { temperatureTrend };
