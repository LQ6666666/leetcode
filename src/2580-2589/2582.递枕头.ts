function passThePillow$(n: number, time: number): number {
  // 来回一个周期
  const idx = time % (n * 2 - 2);
  return idx < n ? idx + 1 : n - (idx % n) - 1;
}

function passThePillow(n: number, time: number): number {
  // 每经过 2 * (n −1) 的时间，枕头会被传递回起点，所以我们可以直接用 time 对 2 * (n −1) 取模求余数
  time %= 2 * (n - 1);
  // 如果 time < n ，枕头没有传递到队尾，传递到 time + 1
  // 如果 time ≥ n ，枕头已经传递过队尾，传递到 n − (time − (n − 1)) = n * 2 − time − 1
  return time < n ? time + 1 : n * 2 - time - 1;
}

export { passThePillow };
