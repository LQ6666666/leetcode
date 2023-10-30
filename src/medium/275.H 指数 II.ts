function hIndex(citations: number[]): number {
  const n = citations.length;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (citations[middle] < n - middle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return n - left;
}

export { hIndex };
