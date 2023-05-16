function chunk<T>(arr: T[], size: number): T[][] {
  const n = arr.length;

  const result: T[][] = [];

  let currentChunk: T[] = [];
  for (let i = 0; i < n; i++) {
    const item = arr[i];
    currentChunk.push(item);
    if (currentChunk.length === size) {
      result.push(currentChunk);
      currentChunk = [];
    }
  }

  if (currentChunk.length) {
    result.push(currentChunk);
  }

  return result;
}

export {};
