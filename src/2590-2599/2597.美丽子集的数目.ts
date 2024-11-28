function beautifulSubsets(nums: number[], k: number): number {
  let ans = -1;
  const map = new Map<number, number>();

  function dfs(i: number) {
    if (i === nums.length) {
      ans++;
      return;
    }

    dfs(i + 1);
    const x = nums[i];
    if ((map.get(x - k) ?? 0) === 0 && (map.get(x + k) ?? 0) === 0) {
      map.set(x, (map.get(x) ?? 0) + 1);
      dfs(i + 1);
      map.set(x, (map.get(x) ?? 0) - 1);
    }
  }

  dfs(0);
  return ans;
}

export {};
