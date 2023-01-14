function digitCount(num: string): boolean {
  const map = new Map<number, number>();

  for (const item of num) {
    const key = +item;
    map.set(key, (map.get(key) ?? 0) + 1);
  }

  const n = num.length;

  for (let i = 0; i < n; i++) {
    const count = +num[i];

    if ((map.get(i) ?? 0) !== count) {
      return false;
    }
  }

  return true;
}

function digitCount1(num: string): boolean {
  const countMap = new Array(10).fill(0);

  const n = num.length;

  for (let i = 0; i < n; i++) {
    const ch = +num[i];
    countMap[ch]++;
  }

  for (let i = 0; i < n; i++) {
    const count = countMap[i];
    if (+num[i] !== count) {
      return false;
    }
  }

  return true;
}

export { digitCount };
