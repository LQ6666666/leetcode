const primes: Set<number> = new Set([
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
]);

function maximumPrimeDifference(nums: number[]): number {
  const n = nums.length;

  let ans = 0;
  let first = -1;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (primes.has(num)) {
      if (first === -1) {
        first = i;
      } else {
        ans = i - first;
      }
    }
  }

  return ans;
}

export { maximumPrimeDifference };
