function minCost(colors: string, neededTime: number[]): number {
  const n = colors.length;
  let ans = 0;

  let i = 1;
  while (i < n) {
    if (colors[i] === colors[i - 1]) {
      ans += Math.min(neededTime[i], neededTime[i - 1]);
      neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
    }
    i++;
  }

  return ans;
}

export { minCost };
