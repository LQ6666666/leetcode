function combine(n: number, k: number): number[][] {
  const path: number[] = [];
  const ans: number[][] = [];
  dfs(1);
  return ans;

  function dfs(startIndex: number) {
    if (path.length === k) {
      ans.push(path.concat());
      return;
    }

    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  }
}

export { combine };
