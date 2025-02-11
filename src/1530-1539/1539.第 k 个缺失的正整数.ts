function findKthPositive(arr: number[], k: number): number {
  const n = arr.length;

  let prev = 0;
  for (let i = 0; i < n; i++) {
    const diff = arr[i] - prev - 1;
    if (k > diff) {
      k -= diff;
      prev = arr[i];
    } else {
      break;
    }
  }

  return prev + k;
}

export { findKthPositive };
