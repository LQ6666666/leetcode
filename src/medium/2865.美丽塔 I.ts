function maximumSumOfHeights(maxHeights: number[]): number {
  const n = maxHeights.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let sum = maxHeights[i];
    let prev = maxHeights[i];
    for (let j = i - 1; j >= 0; j--) {
      const height = Math.min(prev, maxHeights[j]);
      prev = height;
      sum += height;
    }

    prev = maxHeights[i];
    for (let j = i + 1; j < n; j++) {
      const height = Math.min(prev, maxHeights[j]);
      prev = height;
      sum += height;
    }

    ans = Math.max(ans, sum);
  }

  return ans;
}

export { maximumSumOfHeights };
