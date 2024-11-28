function countEven(num: number): number {
  let ans = 0;
  for (let i = 2; i <= num; i++) {
    let x = i;
    let sum = 0;
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }

    if (sum % 2 === 0) {
      ans++;
    }
  }
  return ans;
}

export {};
