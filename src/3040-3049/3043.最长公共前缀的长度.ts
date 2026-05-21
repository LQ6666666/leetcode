function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const set = new Set<number>();
  for (let x of arr1) {
    while (x > 0) {
      set.add(x);
      x = Math.floor(x / 10);
    }
  }

  let max = 0;
  for (let x of arr2) {
    while (x > 0 && !set.has(x)) {
      x = Math.floor(x / 10);
    }
    max = Math.max(max, x);
  }

  return max > 0 ? max.toString().length : 0;
}

export {};
