function getFolderNames(names: string[]): string[] {
  const map = new Map<string, number>();
  const n = names.length;
  const ans = new Array<string>(n);

  for (let i = 0; i < n; i++) {
    const name = names[i];
    let count = map.get(name) ?? 0;

    if (count === 0) {
      ans[i] = name;
      map.set(name, 1);
    } else {
      let newName = addSuffix(name, count++);
      while (map.has(newName)) {
        newName = addSuffix(name, count++);
      }
      ans[i] = newName;
      map.set(name, count);
      map.set(newName, 1);
    }
  }

  return ans;
}

const addSuffix = (name: string, count: number) => `${name}(${count})`;

export {};
