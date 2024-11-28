function minOperationsMaxProfit(
  customers: number[],
  boardingCost: number,
  runningCost: number
): number {
  const n = customers.length;
  // 利润
  let maxProfit = 0;
  // 步数
  let ans = -1;
  // 地上游客
  let ground = 0,
    // 上过车的人总数
    board = 0;

  let i = 0;
  while (i < n || ground > 0) {
    // 新一批游客到来
    if (i < n) {
      ground += customers[i];
    }
    // 地上游客多于 4
    if (ground >= 4) {
      // 4 人上车
      ground -= 4;
      // 坐过车的人 + 4
      board += 4;
    } else {
      // 地上人都上车
      board += ground;
      // 地上没人
      ground = 0;
    }
    // 上过车的人 * 上车费 - 当前转过的次数 * 转车费
    const profit = board * boardingCost - runningCost * (i + 1);
    if (profit > maxProfit) {
      ans = i + 1;
      maxProfit = profit;
    }

    i++;
  }

  return ans;
}

export { minOperationsMaxProfit };
