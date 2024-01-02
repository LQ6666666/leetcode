function flipAndInvertImage(image: number[][]): number[][] {
  const n = image.length;
  const ans: number[][] = Array.from({ length: n }, () => new Array<number>(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][n - j - 1] = image[i][j] === 0 ? 1 : 0;
    }
  }

  return ans;
}

export {};
