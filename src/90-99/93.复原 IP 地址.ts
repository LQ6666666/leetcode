function restoreIpAddresses(s: string): string[] {
  const n = s.length;

  const ans: string[] = [];
  const paths = new Array<string>(4);
  dfs(0, 0);
  return ans;

  function dfs(i: number, startIndex: number) {
    if (i === 4) {
      if (startIndex === n) {
        ans.push(paths.join("."));
      }
      return;
    }

    if (startIndex === n) return;

    if (s[startIndex] === "0") {
      paths[i] = "0";
      dfs(i + 1, startIndex + 1);
      return;
    }

    let addr = 0;
    for (let j = startIndex; j < n; j++) {
      addr = addr * 10 + +s[j];
      if (addr > 0 && addr < 256) {
        paths[i] = addr.toString();
        dfs(i + 1, j + 1);
      } else {
        break;
      }
    }
  }
}

export { restoreIpAddresses };
