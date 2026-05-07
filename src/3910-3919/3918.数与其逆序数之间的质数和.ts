function sumOfPrimesInRange(n: number): number {
  const r = reserve(n);
  const left = Math.min(r, n);
  const right = Math.max(r, n);
  let ans = 0;
  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      ans += i;
    }
  }
  return ans;
}

function reserve(n: number): number {
  let x = 0;
  while (n) {
    x = x * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return x;
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

export {};
