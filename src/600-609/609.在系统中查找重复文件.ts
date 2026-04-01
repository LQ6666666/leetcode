function findDuplicate(paths: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const path of paths) {
    const index = path.indexOf(" ");
    const dirname = path.slice(0, index);
    const files = path.slice(index + 1).split(/\s/);
    for (const file of files) {
      const index = file.indexOf("(");
      const fileName = file.slice(0, index);
      const content = file.slice(index + 1, -1);

      let list = map.get(content);
      if (!list) {
        map.set(content, (list = []));
      }
      list.push(`${dirname}/${fileName}`);
    }
  }

  return Array.from(map.values()).filter(({ length }) => length > 1);
}

export {};
