function nearestValidPoint(x1: number, y1: number, points: number[][]): number {
  let min = Number.MAX_SAFE_INTEGER;
  let index = -1;

  for (let i = 0; i < points.length; i++) {
    const [x2, y2] = points[i];

    if (x1 === x2 || y1 === y2) {
      const value = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      if (value < min) {
        min = value;
        // points 最小的下标
        index = i;
      }
    }
  }

  return index;
}

// console.log(
//   nearestValidPoint(3, 4, [
//     [1, 2],
//     [3, 1],
//     [2, 4],
//     [2, 3],
//     [4, 4]
//   ])
// );

export { nearestValidPoint };
