function lexicalOrder(n: number): number[] {
  let ans: number[] = [];

  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }

  return ans;

  function dfs(x: number) {
    if (x > n) return;
    ans.push(x);

    for (let i = 0; i <= 9; i++) {
      dfs(x * 10 + i);
    }
  }
}

export { lexicalOrder };
