function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    const ac = bitCount(a);
    const bc = bitCount(b);
    if (ac === bc) {
      return a - b;
    } else {
      return ac - bc;
    }
  });
}

function bitCount(num: number): number {
  let count = 0;
  let x = num;
  while (x > 0) {
    if ((x & 1) === 1) {
      count++;
    }
    x >>= 1;
  }
  return count;
}

export { sortByBits };
