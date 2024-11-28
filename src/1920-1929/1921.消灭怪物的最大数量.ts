function eliminateMaximum(dist: number[], speed: number[]): number {
  const n = dist.length;
  const time = new Array(n);
  for (let i = 0; i < n; i++) {
    time[i] = Math.ceil(dist[i] / speed[i]);
  }

  time.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (time[i] <= i) {
      return i;
    }
  }

  return n;
}

export { eliminateMaximum };
