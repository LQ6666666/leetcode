function rotateTheBox(boxGrid: string[][]): string[][] {
  let m = boxGrid.length;
  let n = boxGrid[0].length;
  const ans = Array.from({ length: n }, () => new Array<string>(m));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][m - 1 - i] = boxGrid[i][j];
    }
  }

  m = ans.length;
  n = ans[0].length;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (ans[i][j] === "#") {
        let index = i;
        while (index + 1 < m && ans[index + 1][j] === ".") {
          ans[index][j] = ".";
          ans[index + 1][j] = "#";
          index++;
        }
      }
    }
  }

  return ans;
}

export { rotateTheBox };
