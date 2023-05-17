function circularGameLosers(n: number, k: number): number[] {
  const arr = new Array<number>(n).fill(0);

  let i = 0;
  let count = 1;
  while (!arr[i]) {
    arr[i]++;

    // 计算下一步
    const step = count++ * k;
    // 计算 i
    i = (i + step) % n;
  }

  const ans: number[] = [];
  for (let i = 0; i < n; i++) {
    if (!arr[i]) {
      ans.push(i + 1);
    }
  }
  return ans;
}

export {};
