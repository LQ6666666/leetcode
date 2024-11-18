function imageSmoother(img: number[][]): number[][] {
  const m = img.length;
  const n = img[0].length;

  const ans = Array.from({ length: m }, () => new Array<number>(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans[i][j] = helper(img, i, j);
    }
  }

  return ans;
}

const Dir: [x: number, y: number][] = [
  [0, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1]
];

function helper(img: number[][], i: number, j: number): number {
  const m = img.length;
  const n = img[0].length;

  let ret = 0;
  let count = 0;
  for (const [x, y] of Dir) {
    const dx = j + x;
    const dy = i + y;
    if (dx >= 0 && dx < n && dy >= 0 && dy < m) {
      ret += img[dy][dx];
      count++;
    }
  }

  return Math.floor(ret / count);
}

export { imageSmoother };
