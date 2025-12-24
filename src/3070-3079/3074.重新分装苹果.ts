function minimumBoxes(apple: number[], capacity: number[]): number {
  const n = capacity.length;
  capacity.sort((a, b) => b - a);

  const toggle = apple.reduce((acc, num) => acc + num, 0);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += capacity[i];
    if (sum >= toggle) {
      return i + 1
    }
  }

  return n;
}

export {};
