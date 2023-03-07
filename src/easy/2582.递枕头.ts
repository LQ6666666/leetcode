function passThePillow(n: number, time: number): number {
  // 来回一个周期
  const idx = time % (n * 2 - 2);
  return idx < n ? idx + 1 : n - (idx % n) - 1;
}

export { passThePillow };
