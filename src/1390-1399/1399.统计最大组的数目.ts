function countLargestGroup(n: number): number {
  const counts = new Array<number>(37).fill(0);

  let max = 0;
  for (let i = 1; i <= n; i++) {
    let x = i;
    let sum = 0;
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    counts[sum]++;
    max = Math.max(counts[sum], max);
  }

  let ans = 0;
  for (let i = 1; i < 37; i++) {
    if (max === counts[i]) {
      ans++;
    }
  }

  return ans;
}

export {};
