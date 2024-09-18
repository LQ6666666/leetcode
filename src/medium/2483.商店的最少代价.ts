function bestClosingTime(customers: string): number {
  const n = customers.length;
  const prefixSum = new Array<number>(n + 1);
  prefixSum[0] = 0;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + (customers[i] === "Y" ? 1 : 0);
  }

  let ans = 0;
  let penalty = Number.MAX_SAFE_INTEGER;
  // 枚举时间
  for (let i = 0; i <= n; i++) {
    const openPenalty = i - prefixSum[i] - prefixSum[0];
    const closePenalty = prefixSum[n] - prefixSum[i];
    const p = openPenalty + closePenalty;
    if (penalty > p) {
      penalty = p;
      ans = i;
    }
  }

  return ans;
}

export { bestClosingTime };
