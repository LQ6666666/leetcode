function sortPeople(names: string[], heights: number[]): string[] {
  const map = new Map<number, number>();
  const n = names.length;
  for (let i = 0; i < n; i++) {
    map.set(heights[i], i);
  }
  heights.sort((a, b) => map.get(b)! - map.get(a)!);
  const ans: string[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const height = heights[i];
    ans[i] = names[map.get(height)!];
  }
  return names;
}

export {};
