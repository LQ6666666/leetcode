function minSensors(n: number, m: number, k: number): number {
  const size = k * 2 + 1;
  return Math.ceil(n / size) * Math.ceil(m / size);
}

export {};
