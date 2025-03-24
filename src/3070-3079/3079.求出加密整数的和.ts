function sumOfEncryptedInt(nums: number[]): number {
  let ans = 0;

  for (const num of nums) {
    ans += encrypt(num);
  }

  return ans;

  function encrypt(num: number): number {
    let x = num;
    let max = 0;
    let count = 0;
    while (x) {
      count++;
      max = Math.max(x % 10, max);
      x = Math.floor(x / 10);
    }

    let res = 0;
    while (count) {
      count--;
      res = res * 10 + max;
    }

    return res;
  }
}

export { sumOfEncryptedInt };
