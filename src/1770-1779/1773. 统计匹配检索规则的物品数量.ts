function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  const index = {
    type: 0,
    color: 1,
    name: 2
  }[ruleKey] as number;

  let ans = 0;
  for (const item of items) {
    if (item[index] === ruleValue) {
      ans++;
    }
  }
  return ans;
}

export { countMatches };
