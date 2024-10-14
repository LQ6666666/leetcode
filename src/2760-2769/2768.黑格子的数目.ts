const DIRECTION = [
  [0, 0],
  [0, -1],
  [-1, 0],
  [-1, -1]
] as const;

function countBlackBlocks(m: number, n: number, coordinates: number[][]): number[] {
  const map = new Map<string, number>();

  for (const [x, y] of coordinates) {
    for (const [dx, dy] of DIRECTION) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < m - 1 && ny >= 0 && ny < n - 1) {
        const key = [nx, ny].join("-");
        map.set(key, (map.get(key) ?? 0) + 1);
      }
    }
  }

  const ans = new Array<number>(5).fill(0);
  map.forEach(value => {
    ans[value]++;
    ans[0]++;
  });

  ans[0] = (m - 1) * (n - 1) - ans[0];

  return ans;
}

export { countBlackBlocks };
