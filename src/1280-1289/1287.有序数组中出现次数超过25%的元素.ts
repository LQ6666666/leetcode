function findSpecialInteger(arr: number[]): number {
  const n = arr.length;
  const length = Math.floor(n / 4);

  for (let i = 0; i + length < n; i++) {
    if (arr[i] === arr[i + length]) {
      return arr[i];
    }
  }

  return arr[0];
}

export { findSpecialInteger };
