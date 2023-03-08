function mySqrt(x: number): number {
  let left = 0,
    right = x;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    const sqrt = middle * middle;
    if (sqrt === x) {
      return middle;
    } else if (sqrt < x) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left - 1;
}

export {};
