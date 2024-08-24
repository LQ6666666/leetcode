function transportationHub(path: number[][]): number {
  const map = new Map<number, number>();

  // 所有地点（除自身外）均有一条 单向 专线 直接 通往该地点
  for (const [form, to] of path) {
    map.set(to, (map.get(to) ?? 0) + 1);
  }

  // 该地点不存在任何 通往其他地点 的单向专线
  for (const [form] of path) {
    map.set(form, 0);
  }

  const n = map.size;
  const arr = Array.from(map.entries());

  for (const [f, s] of arr) {
    if (s === n - 1) {
      return f;
    }
  }

  return -1;
}

export { transportationHub };
