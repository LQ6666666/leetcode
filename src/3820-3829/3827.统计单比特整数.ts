function countMonobit(n: number): number {
  let ans = 1;

  for (let i = 1; i <= n; i = 2 * i + 1) {
    ans++;
  }

  return ans;
}

export {};
