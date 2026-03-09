function permutation(S: string): string[] {
  const s = S.split("").sort();
  const n = s.length;

  const ans: string[] = [];

  const visible = new Array<boolean>(n).fill(false);
  const path: string[] = [];
  dfs();
  return ans;

  function dfs() {
    if (path.length === n) {
      ans.push(path.join(""));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visible[i]) continue;
      if (i > 0 && !visible[i - 1] && s[i] === s[i - 1]) continue;

      path.push(s[i]);
      visible[i] = true;
      dfs();
      visible[i] = false;
      path.pop();
    }
  }
}

export {};
