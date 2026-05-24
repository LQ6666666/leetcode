function printVertically(s: string): string[] {
  const words = s.split(" ");
  const m = words.length;
  let n = 0;
  for (let i = 0; i < m; i++) {
    n = Math.max(n, words[i].length);
  }

  const grid = Array.from({ length: n }, () => new Array<string>(m).fill(" "));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (words[i][j]) {
        grid[j][i] = words[i][j];
      }
    }
  }

  const ans = new Array<string>(n);
  for (let i = 0; i < n; i++) {
    let end = m - 1;
    while (grid[i][end] === " ") {
      end--;
    }
    let t = "";
    for (let j = 0; j <= end; j++) {
      t += grid[i][j];
    }
    ans[i] = t;
  }

  return ans;
}

export {};
