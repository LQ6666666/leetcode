function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  const n = customers.length;

  // 我们可以先将原本就满意的客户加入答案
  // 同时将对应的 customers[i] 变为 0
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (grumpy[i] == 0) {
      ans += customers[i];
      customers[i] = 0;
    }
  }

  // 在 customers 中找到连续一段长度为 minutes 的子数组，使得其总和最大
  let current = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    current += customers[i];
    if (i >= minutes) {
      current -= customers[i - minutes];
    }
    max = Math.max(max, current);
  }

  return ans + max;
}

export { maxSatisfied };
