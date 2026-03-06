function missingMultiple(nums: number[], k: number): number {
  const set = new Set(nums);

  let ans = k;
  while (set.has(ans)) {
    ans += k;
  }

  return ans;
}

export {};
