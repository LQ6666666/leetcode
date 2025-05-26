function permutation(S: string): string[] {
  const n = S.length;
  const ans: string[] = [];
  const path: string[] = [];
  const used = new Array<boolean>(n).fill(false);

  dfs();
  return ans;

  function dfs() {
    if (path.length === n) {
      ans.push(path.join(""));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(S[i]);

        dfs();

        path.pop();
        used[i] = false;
      }
    }
  }
}

export { permutation };
