function addRungs(rungs: number[], dist: number): number {
  const n = rungs.length;
  let ans = 0;
  let pre = 0;

  for (let i = 0; i < n; i++) {
    if (pre + dist < rungs[i]) {
      ans += Math.ceil((rungs[i] - pre) / dist) - 1;
    }
    pre = rungs[i];
  }

  return ans;
}

export {};
