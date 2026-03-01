function minPartitions(n: string): number {
  let ans = 0;
  for (const c of n) {
    ans = Math.max(+c, ans);
  }
  return ans;
}

export {};
