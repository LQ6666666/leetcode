function maxCount(banned: number[], n: number, maxSum: number): number {
  const set = new Set(banned);
  let ans = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (set.has(i)) continue;

    if (sum + i > maxSum) {
      break;
    }

    sum += i;
    ans++;
  }

  return ans;
}

export { maxCount };
