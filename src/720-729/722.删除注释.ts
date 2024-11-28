function removeComments(source: string[]): string[] {
  const ans: string[] = [];
  let inBlock = false;
  let newLine = "";

  for (const line of source) {
    const n = line.length;

    for (let i = 0; i < n; i++) {
      let isLast = i === n - 1;

      if (inBlock) {
        if (!isLast && line[i] === "*" && line[i + 1] === "/") {
          inBlock = false;
          i++;
        }
      } else {
        if (!isLast && line[i] === "/" && line[i + 1] === "*") {
          inBlock = true;
          i++;
        } else if (!isLast && line[i] === "/" && line[i + 1] === "/") {
          break;
        } else {
          newLine += line[i];
        }
      }
    }

    if (!inBlock && newLine.length > 0) {
      ans.push(newLine);
      newLine = "";
    }
  }

  return ans;
}

export { removeComments };
