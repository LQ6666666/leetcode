function findKthBit(n: number, k: number): string {
  if (n === 1) {
    return "0";
  }
  const middle = 1 << (n - 1);
  if (k === middle) {
    return "1";
  } else if (k < middle) {
    return findKthBit(n - 1, k);
  }
  // k > middle
  else {
    return findKthBit(n - 1, 2 * middle - k) === "0" ? "1" : "0";
  }
}

export {};
