function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const alice = sum(aliceSizes);
  const bob = sum(bobSizes);

  const delta = Math.floor((alice - bob) / 2);
  const set = new Set(aliceSizes);
  let ans: number[] = new Array(2);

  for (const y of bobSizes) {
    const x = y + delta;
    if (set.has(x)) {
      ans = [x, y];
      break;
    }
  }

  return ans;
}

function sum(sizes: number[]) {
  return sizes.reduce((acc, num) => acc + num, 0);
}

export {};
