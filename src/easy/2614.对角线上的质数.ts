function diagonalPrime(nums: number[][]): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let x = nums[i][i];
    if (x > ans && isPrime(x)) {
      ans = x;
    }

    x = nums[i][n - i - 1];
    if (x > ans && isPrime(x)) {
      ans = x;
    }
  }

  return ans;
}

function isPrime(x: number): boolean {
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  // 1 不是质数
  return x >= 2;
}

export { diagonalPrime };
