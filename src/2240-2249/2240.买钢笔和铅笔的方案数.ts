function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
  if (cost1 > cost2) {
    return waysToBuyPensPencils(total, cost2, cost1);
  }

  let ans = 0;
  let i = 0;
  while (cost1 * i <= total) {
    // 钱不用花完，所以剩下钱可以买几个铅笔就是多少种组合
    ans += Math.floor((total - i * cost1) / cost2) + 1;
    i++;
  }

  return ans;
}

export { waysToBuyPensPencils };
