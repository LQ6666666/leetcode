function checkPrimeFrequency(nums: number[]): boolean {
  const n = nums.length;
  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const keys = Array.from(map.keys());
  for (const key of keys) {
    const count = map.get(key)!;
    if (isPrime(count)) {
      return true;
    }
  }
  return false;
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

export { checkPrimeFrequency };
