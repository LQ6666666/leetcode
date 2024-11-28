function minimumBoxes(apple: number[], capacity: number[]): number {
  const n = capacity.length;
  capacity.sort((a, b) => b - a);

  let toggle = apple.reduce((acc, num) => acc + num, 0);

  let i = 0;
  while (i < n && toggle !== 0) {
    if (toggle - capacity[i] >= 0) {
      toggle -= capacity[i];
    } else {
      toggle = 0;
    }

    i++;
  }

  return i;
}

export { minimumBoxes };
