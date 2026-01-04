function sumFourDivisors(nums: number[]): number {
  let ans = 0;

  for (const num of nums) {
    let count = 0;
    let sum = 0;

    for (let i = 1; i * i <= num; i++) {
      if (num % i === 0) {
        count++;
        sum += i;
        // 另一个因数
        if (i * i !== num) {
          count++;
          sum += num / i;
        }
      }
    }

    if (count === 4) {
      ans += sum;
    }
  }

  return ans;
}

export {};
