function bestCoordinate(towers: number[][], radius: number): number[] {
  let ans = [0, 0];
  let max = 0;

  for (let i = 0; i < 51; i++) {
    for (let j = 0; j < 51; j++) {
      let quality = 0;

      for (const [x, y, q] of towers) {
        const d2 = (x - i) * (x - i) + (y - j) * (y - j);
        if (d2 <= radius * radius) {
          quality += Math.floor(q / (1 + Math.sqrt(d2)));
        }

        if (quality > max) {
          ans = [i, j];
          max = quality;
        }
      }
    }
  }

  return ans;
}

export { bestCoordinate };
