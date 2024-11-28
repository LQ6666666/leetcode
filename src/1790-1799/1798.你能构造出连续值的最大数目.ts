function getMaximumConsecutive(coins: number[]): number {
  coins.sort((a, b) => a - b);

  let ans = 1;
  // 从 0 开始连续
  for (const coin of coins) {
    if (coin > ans) {
      break;
    }
    ans += coin;
  }

  return ans;
}

export { getMaximumConsecutive };
