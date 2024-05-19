function getWinner(arr: number[], k: number): number {
  const n = arr.length;

  let mx = arr[0];
  let win = 0;
  for (let i = 1; i < n && win < k; i++) {
    if (arr[i] > mx) {
      // 新的最大值
      mx = arr[i];
      win = 0;
    }
    // 获胜回合 +1
    win++;
  }
  return mx;
}

export { getWinner };
