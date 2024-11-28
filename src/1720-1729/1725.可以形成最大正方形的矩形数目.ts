function countGoodRectangles(rectangles: number[][]): number {
  let max = -1;
  let ans = 0;
  for (const rectangle of rectangles) {
    const size = Math.min(...rectangle);
    if (size === max) {
      ans++;
    } else if (size > max) {
      max = size;
      ans = 1;
    }
  }
  return ans;
}

export {};
