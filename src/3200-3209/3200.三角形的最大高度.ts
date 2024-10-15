function maxHeightOfTriangle(red: number, blue: number): number {
  return Math.max(helper(red, blue), helper(blue, red));
}

function helper(a: number, b: number) {
  let i = 1;
  let flag: 0 | 1 = 0;
  let count = 0;

  while ((flag === 0 ? a : b) >= i) {
    if (flag === 0) {
      a -= i;
      flag = 1;
    } else {
      b -= i;
      flag = 0;
    }
    i++;
    count++;
  }

  return count;
}

export { maxHeightOfTriangle };
