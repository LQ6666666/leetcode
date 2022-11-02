function averageValue(nums: number[]): number {
  let count = 0,
    sum = 0;

  for (const num of nums) {
    if (num % 3 === 0 && num % 2 === 0) {
      count++;
      sum += num;
    }
  }

  return count === 0 ? 0 : Math.floor(sum / count);
}

export { averageValue };
