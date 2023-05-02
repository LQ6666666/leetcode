function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const result: number[] = [];
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const item = arr[i];
    if (fn(item, i)) {
      result.push(item);
    }
  }

  return result;
}

export {};
