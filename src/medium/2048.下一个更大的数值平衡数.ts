function nextBeautifulNumber(n: number): number {
  for (let i = n + 1; i <= 1224444; i++) {
    if (isBalance(i)) {
      return i;
    }
  }
  return -1;
}

function isBalance(x: number): boolean {
  let count = new Array(10).fill(0);
  while (x > 0) {
    count[x % 10]++;
    x = Math.floor(x / 10);
  }

  for (let i = 0; i < 10; i++) {
    if (count[i] > 0 && count[i] !== i) {
      return false;
    }
  }

  return true;
}

export { nextBeautifulNumber };
