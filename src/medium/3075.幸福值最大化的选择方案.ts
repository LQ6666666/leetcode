function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => b - a);

  let ans = 0;
  let i = 0;
  while (i < k) {
    ans += Math.max(happiness[i] - i++, 0);
  }

  return ans;
}

export { maximumHappinessSum };
