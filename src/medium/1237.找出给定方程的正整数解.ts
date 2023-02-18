interface CustomFunction {
  f: (x: number, y: number) => number;
}

function findSolution(customfunction: CustomFunction, z: number): number[][] {
  const ans: number[][] = [];
  for (let x = 1; x <= 1000; x++) {
    let left = 1,
      right = 1000;

    while (left <= right) {
      const mid = left + ((right - left) >> 1);

      const value = customfunction.f(x, mid);

      if (value === z) {
        ans.push([x, mid]);
        break;
      }

      if (value > z) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return ans;
}

export { findSolution };
