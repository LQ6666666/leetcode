function longestBalanced(nums: number[]): number {
  const n = nums.length;

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const odd = new Map<number, number>();
    const even = new Map<number, number>();

    for (let j = i; j < n; j++) {
      const c = nums[j] % 2 === 0 ? even : odd;

      c.set(nums[j], (c.get(nums[j]) ?? 0) + 1);

      if (odd.size == even.size) {
        ans = Math.max(ans, j - i + 1);
      }
    }
  }

  return ans;
}

export {};
