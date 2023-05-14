function rearrangeBarcodes(barcodes: number[]): number[] {
  const n = barcodes.length;
  if (n < 2) return barcodes;

  const counts = new Map<number, number>();
  for (const barcode of barcodes) {
    const count = (counts.get(barcode) ?? 0) + 1;
    counts.set(barcode, count);
  }

  // 偶数
  let evenIndex = 0;
  // 奇数
  let oddIndex = 1;
  // 中间下标
  let halfLength = Math.floor(n / 2);

  const ans = new Array<number>(n).fill(0);
  counts.forEach((count, x) => {
    // 如果元素的出现次数大于 0 且小于或等于 halfLength, 且 oddIndex 没有超出数组下标范围
    while (count > 0 && count <= halfLength && oddIndex < n) {
      ans[oddIndex] = x;
      count--;
      oddIndex += 2;
    }

    // 如果元素的出现次数大于 halfLength 或 oddIndex 超出数组下标范围
    // 则将元素放置在 evenIndex 然后将 evenIndex 的值加 2
    while (count > 0) {
      ans[evenIndex] = x;
      count--;
      evenIndex += 2;
    }
  });

  return ans;
}

export {};
