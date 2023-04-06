function miceAndCheese(reward1: number[], reward2: number[], k: number): number {
  // 找出 reward1 最大的 k 个数字, reward1 选出的下标 reward2 不能选
  const n = reward1.length;
  let ans = 0;
  const diff = new Array<number>(n);
  for (let i = 0; i < n; i++) {
    ans += reward2[i];
    diff[i] = reward1[i] - reward2[i];
  }

  diff.sort((a, b) => b - a);

  let i = 0;
  while (i < k) {
    ans += diff[i++];
  }
  return ans;
}

export {};
