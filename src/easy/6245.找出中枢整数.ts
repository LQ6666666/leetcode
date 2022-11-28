function pivotInteger(n: number): number {
  // 总和
  let sum = (n * (n + 1)) >> 1;

  // 之前元素和
  let current = 0;
  for (let i = 1; i <= n; i++) {
    current += i;
    // 相等
    if (current === sum - current + i) {
      return i;
    } else if (current > sum - current + i) {
      // 大于了，没找到
      break;
    }
  }

  return -1;
}

console.log(pivotInteger(8));
