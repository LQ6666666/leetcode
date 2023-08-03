function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const m = image.length;
  const n = image[0].length;

  const startNum = image[sr][sc];
  dfs(sr, sc);
  return image;

  function dfs(r: number, c: number) {
    // 边界
    if (r < 0 || r >= m || c < 0 || c >= n) return;
    // 不是起始点的数字 || 已经赋值过了
    if (image[r][c] !== startNum || color === startNum) return;

    image[r][c] = color;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }
}

export { floodFill };
