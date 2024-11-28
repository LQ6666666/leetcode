export {};

// 暴力
function finalPrices$(prices: number[]): number[] {
  const n = prices.length;
  const ans = new Array<number>(n);

  for (let i = 0; i < n; i++) {
    const p = prices[i];
    let temp = -1;

    for (let j = i + 1; j < n; j++) {
      const cur = prices[j];
      if (cur <= p) {
        temp = p - cur;
        break;
      }
    }

    ans[i] = temp === -1 ? p : temp;
  }

  return ans;
}

// 单调栈
function finalPrices(prices: number[]): number[] {
  const n = prices.length;

  const stack: number[] = [];
  const ans = new Array<number>(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && prices[stack.at(-1)!] >= prices[i]) {
      const prevIndex = stack.pop()!;
      ans[prevIndex] = prices[prevIndex] - prices[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    const index = stack.pop()!;
    ans[index] = prices[index];
  }

  return ans;
}
