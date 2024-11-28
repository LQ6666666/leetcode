function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const nums = Array.from(map.keys());
  const set = new Set<number>();
  for (const num of nums) {
    const count = map.get(num)!;
    if (set.has(count)) {
      return false;
    }
    set.add(count);
  }

  return true;
}

export {};
