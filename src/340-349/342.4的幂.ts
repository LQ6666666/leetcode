function isPowerOfFour$(n: number): boolean {
  if (n === 0) return false;

  let x = n;
  while (x % 4 === 0) {
    x = x / 4;
  }
  return x === 1;
}

function isPowerOfFour(n: number): boolean {
  // 4的幂 它的所有偶数二进制位都是 0，构造一个奇数二进制位都是 1 的二进制
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;
}

export { isPowerOfFour };
