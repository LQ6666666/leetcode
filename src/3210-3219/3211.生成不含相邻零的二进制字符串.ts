function validStrings(n: number): string[] {
  const paths: number[] = [];
  const ans: string[] = [];

  function dfs(i: number): void {
    if (paths.length === n) {
      ans.push(paths.join(""));
      return;
    }

    paths.push(1);
    dfs(i + 1);
    paths.pop();

    if (i === 0 || paths[i - 1] === 1) {
      paths.push(0);
      dfs(i + 1);
      paths.pop();
    }
  }

  dfs(0);

  return ans;
}

export { validStrings };
