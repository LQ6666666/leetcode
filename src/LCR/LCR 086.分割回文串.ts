function partition(s: string): string[][] {
  const n = s.length;
  const ans: string[][] = [];
  const path: string[] = [];

  dfs(0);
  return ans;

  function dfs(startIndex: number): void {
    if (startIndex === n) {
      ans.push(path.slice());
      return;
    }

    for (let i = startIndex; i < n; i++) {
      if (isPalindrome(startIndex, i)) {
        path.push(s.slice(startIndex, i + 1));
        dfs(i + 1);
        path.pop();
      }
    }
  }

  function isPalindrome(start: number, end: number): boolean {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}

export { partition };
