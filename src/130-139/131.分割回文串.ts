function partition(s: string): string[][] {
  const n = s.length;

  const ans: string[][] = [];
  const path: string[] = [];

  dfs(0);

  return ans;

  function dfs(i: number) {
    if (i === n) {
      ans.push(path.slice());
      return;
    }

    for (let j = i; j < n; j++) {
      if (isPalindrome(i, j)) {
        path.push(s.slice(i, j + 1));
        dfs(j + 1);
        path.pop();
      }
    }
  }

  function isPalindrome(l: number, r: number): boolean {
    while (l < r && s[l] === s[r]) {
      l++;
      r--;
    }
    return l >= r;
  }
}

export { partition };
