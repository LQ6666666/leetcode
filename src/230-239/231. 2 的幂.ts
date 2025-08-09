function isPowerOfTwo$(n: number): boolean {
  if (n === 0) return false;
  if (n === 1) return true;

  if (n % 2 === 0) {
    return isPowerOfTwo(Math.floor(n / 2));
  } else {
    return false;
  }
}

function isPowerOfTwo(n: number): boolean {
  // 如果一个数是 2 的 n 次幂，那么，这个数换算成二进制，一定是最左边是 1，其他位是 0 的形式
  // n - 1 的二进制，例如 n = 0x100，那么 n - 1 的二进制就是 0x11，所以 0x100 & 0x11 = 0
  return n > 0 && ((n - 1) & n) === 0;
}

export { isPowerOfTwo };
