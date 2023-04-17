function maxDivScore(nums: number[], divisors: number[]): number {
  const n = divisors.length;
  let ans = -1;
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    const divisor = divisors[i];
    const count = nums.reduce((prev, cur) => (prev += cur % divisor === 0 ? 1 : 0), 0);

    if (count > max) {
      max = count;
      ans = divisor;
    } else if (count === max) {
      ans = Math.min(ans, divisor);
    }

    min = Math.min(min, divisor);
  }

  return max === 0 ? min : ans;
}

export {};
