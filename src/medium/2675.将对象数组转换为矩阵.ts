const isObject = (val: unknown): val is object => typeof val === "object" && val !== null;

type DataType = string | number | boolean | null;

function jsonToMatrix(arr: any[]): DataType[][] {
  // 获取所有的 key 和对应的值
  const map = new Map<string, [DataType, number][]>();
  arr.forEach((item, index) => dfs(item, [], index));

  const keys = Array.from(map.keys())
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));

  const n = arr.length;
  const m = keys.length;

  const ans: DataType[][] = Array.from({ length: n + 1 }, () => new Array(m).fill(""));
  ans[0] = keys;

  // 初始化
  for (let i = 0; i < m; i++) {
    // 第一行
    const key = ans[0][i] as string;
    const values = map.get(key)!;
    // 根据 rowIndex 决定放在哪一行
    for (let j = 0; j < values.length; j++) {
      const [value, index] = values[j];
      ans[index + 1][i] = value;
    }
  }

  return ans;

  function dfs(data: object, paths: string[], rowIndex: number) {
    if (!isObject(data)) return;

    const keys = Object.keys(data) as (keyof typeof data)[];
    for (const key of keys) {
      const val = data[key];
      const newPath = paths.concat(key);

      if (isObject(val)) {
        dfs(val, newPath, rowIndex);
      } else {
        const path = newPath.join(".");
        const value = map.get(path) ?? [];
        value.push([val, rowIndex]);
        map.set(path, value);
      }
    }
  }
}

export {};
