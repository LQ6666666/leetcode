function reorganizeString(s: string): string {
  const n = s.length;

  let max = 0;
  const map = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    const count = (map.get(s[i]) ?? 0) + 1;
    map.set(s[i], count);
    max = Math.max(max, count);
  }

  if (2 * max - 1 > n) {
    return "";
  }

  const keys = Array.from(map.keys()).sort((a, b) => map.get(b)! - map.get(a)!);

  const result = new Array<string>(n);
  let index = 0;
  for (let i = 0; i < n; i++) {
    const key = keys[i];
    let count = map.get(key)!;

    while (count > 0) {
      result[index] = key;
      index += 2;
      if (index >= n) {
        index = 1;
      }
      count--;
    }
  }

  return result.join("");
}

export {};
