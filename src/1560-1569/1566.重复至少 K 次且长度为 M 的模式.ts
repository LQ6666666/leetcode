function containsPattern(arr: number[], m: number, k: number): boolean {
  const n = arr.length;
  for (let l = 0; l <= n - m * k; l++) {
    let offset = 0;
    for (; offset < m * k; offset++) {
      if (arr[l + offset] !== arr[l + (offset % m)]) {
        break;
      }
    }
    if (offset === m * k) {
      return true;
    }
  }
  return false;
}

export { containsPattern };
