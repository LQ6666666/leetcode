function differenceOfSum(nums: number[]): number {
  let elementSum = 0;
  let digitalSum = 0;
  for (let num of nums) {
    elementSum += num;

    while (num > 0) {
      digitalSum += num % 10;
      num = Math.floor(num / 10);
    }
  }
  return Math.abs(elementSum - digitalSum);
}

export { differenceOfSum };
