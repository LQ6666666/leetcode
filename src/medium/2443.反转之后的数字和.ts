// 暴力
function sumOfNumberAndReverse(num: number): boolean {
  for (let i = 0; i <= num; i++) {
    let reverse = 0;
    let x = i;
    while (x) {
      reverse = reverse * 10 + (x % 10);
      x = Math.floor(x / 10);
    }

    if (reverse + i === num) {
      return true;
    }
  }

  return false;
}

export { sumOfNumberAndReverse };
