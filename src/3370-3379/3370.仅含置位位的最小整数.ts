/** 返回大于等于 n 的二进制全为 1 的最小整数 */
function smallestNumber(n: number): number {
  let ans = 0;
  while (ans < n) {
    ans = (ans << 1) | 1;
  }
  return ans;
}

export { smallestNumber };
