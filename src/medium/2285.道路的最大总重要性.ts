function maximumImportance(n: number, roads: [a: number, b: number][]): number {
  const counts = new Array<number>(n).fill(0);
  for (const [a, b] of roads) {
    counts[a]++;
    counts[b]++;
  }

  // 给道路多的城市 => 重要性大
  counts.sort((a, b) => a - b);

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += counts[i] * (i + 1);
  }

  return ans;
}

export { maximumImportance };
