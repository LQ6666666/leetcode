function getHappyString(n: number, k: number): string {
  const arr: string[] = [];
  const path: string[] = [];
  dfs();
  return arr.length < k ? "" : arr[k - 1];

  function dfs() {
    if (path.length === n) {
      arr.push(path.join(""));
      return;
    }

    for (const c of ["a", "b", "c"]) {
      if (path.length === 0 || path[path.length - 1] !== c) {
        path.push(c);
        dfs();
        path.pop();
      }
    }
  }
}

export {};
