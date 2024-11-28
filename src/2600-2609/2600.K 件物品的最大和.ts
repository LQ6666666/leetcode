function kItemsWithMaximumSum(
  numOnes: number,
  numZeros: number,
  numNegOnes: number,
  k: number
): number {
  if (numOnes >= k) {
    return k;
  } else if (numOnes + numZeros >= k) {
    return numOnes;
  } else {
    return numOnes - (k - numOnes - numZeros);
  }
}

export {};
