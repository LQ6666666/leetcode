function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a, b) => b - a);
  let temp = 0;
  let ans = 0;
  for (const si of satisfaction) {
    temp += si;
    if (temp < 0) {
      break;
    }
    ans += temp;
  }

  return ans;
}

export { maxSatisfaction };
