function findNumbers(nums: number[]): number {
  let count = 0;
  for (let num of nums) {
    let n = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      n++;
    }

    if (n % 2 === 0) {
      count++;
    }
  }
  return count;
}

export { findNumbers };
