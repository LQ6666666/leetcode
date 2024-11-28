function letterCasePermutation(s: string): string[] {
  const n = s.length;
  const ans: string[] = [];

  function dfs(idx: number, cur: string): void {
    if (idx == n) {
      ans.push(cur);
      return;
    }

    const ch = s[idx];
    dfs(idx + 1, cur + ch);

    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      // ^ 异或
      // 97 ^ 32 = 65
      // 65 ^ 32 = 97
      dfs(idx + 1, cur + String.fromCharCode(s.charCodeAt(idx) ^ 32));
    }
  }

  dfs(0, "");

  return ans;
}

// console.log(letterCasePermutation("a1b2"));

export { letterCasePermutation };
