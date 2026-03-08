function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[]
): number {
  const landWater = solve(landStartTime, landDuration, waterStartTime, waterDuration);
  const waterLand = solve(waterStartTime, waterDuration, landStartTime, landDuration);
  return Math.min(landWater, waterLand);
}

function solve(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[]
): number {
  let minFinish = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < landStartTime.length; i++) {
    minFinish = Math.min(minFinish, landStartTime[i] + landDuration[i]);
  }
  let res = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < waterStartTime.length; i++) {
    res = Math.min(res, Math.max(waterStartTime[i], minFinish) + waterDuration[i]);
  }
  return res;
}

export { earliestFinishTime };
