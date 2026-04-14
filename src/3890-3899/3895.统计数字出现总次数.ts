function countDigitOccurrences(nums: number[], digit: number): number {
  let ans = 0;

  for (let x of nums) {
    while (x) {
      if (x % 10 === digit) {
        ans++;
      }
      x = Math.floor(x / 10);
    }
  }

  return ans;
}

export {};
