function majorityFrequencyGroup(s: string): string {
  const n = s.length;

  let maxCount = 0;
  const countMap = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    const count = (countMap.get(ch) ?? 0) + 1;
    countMap.set(ch, count);
    maxCount = Math.max(maxCount, count);
  }

  let maxGroupSize = 0;
  const groupMap = new Map<number, string[]>();
  countMap.forEach((count, ch) => {
    let value = groupMap.get(count);
    if (!value) {
      groupMap.set(count, (value = []));
    }
    value.push(ch);
    maxGroupSize = Math.max(maxGroupSize, value.length);
  });

  const arr: [number, string[]][] = [];
  groupMap.forEach((value, count) => {
    if (value.length === maxGroupSize) {
      arr.push([count, value]);
    }
  });
  arr.sort(([a], [b]) => b - a);

  return arr[0][1].join("");
}

export { majorityFrequencyGroup };
