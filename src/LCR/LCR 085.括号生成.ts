function generateParenthesis(n: number): string[] {
  const ans: string[] = [];
  dfs(n, n, "");
  return ans;

  function dfs(left: number, right: number, str: string): void {
    if (left === 0 && right === 0) {
      ans.push(str);
      return;
    }

    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }

    if (right > left) {
      dfs(left, right - 1, str + ")");
    }
  }
}

export { generateParenthesis };
