function generateParenthesis(n: number): string[] {
  const ans: string[] = [];
  dfs("", 0, 0);
  return ans;

  function dfs(s: string, left: number, right: number) {
    if (left + right === n * 2) {
      ans.push(s);
      return;
    }

    if (left < n) {
      dfs(s + "(", left + 1, right);
    }

    if (left > right) {
      dfs(s + ")", left, right + 1);
    }
  }
}

export { generateParenthesis };
