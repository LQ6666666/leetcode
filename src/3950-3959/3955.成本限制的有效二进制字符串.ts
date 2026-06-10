function generateValidStrings(n: number, k: number): string[] {
  const ans: string[] = [];
  const path: string[] = [];
  let cost = 0;
  dfs(0);
  return ans;

  function dfs(index: number) {
    if (cost > k) return;

    if (path.length === n) {
      ans.push(path.join(""));
      return;
    }

    if (path.length === 0 || path[path.length - 1] === "0") {
      path.push("0");
      dfs(index + 1);
      path.pop();

      cost += index;
      path.push("1");
      dfs(index + 1);
      path.pop();
      cost -= index;
    } else {
      path.push("0");
      dfs(index + 1);
      path.pop();
    }
  }
}

export {};
