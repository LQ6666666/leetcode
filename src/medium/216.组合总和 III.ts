function combinationSum3(k: number, n: number): number[][] {
  const ans: number[][] = [];
  let paths: number[] = [];
  let sum = 0;
  dfs(1);
  return ans;

  function dfs(x: number) {
    if (x > 10 || paths.length > k) return;

    if (paths.length === k && sum === n) {
      ans.push(paths.slice());
      return;
    }

    paths.push(x);
    sum += x;
    dfs(x + 1);

    paths.pop();
    sum -= x;
    dfs(x + 1);
  }
}

export { combinationSum3 };
