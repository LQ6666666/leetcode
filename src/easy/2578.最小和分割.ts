function splitNum(num: number): number {
  const nums: number[] = [];
  let x = num;
  while (x > 0) {
    nums.push(x % 10);
    x = Math.floor(x / 10);
  }
  nums.sort((a, b) => a - b);

  let n = nums.length;
  let num1 = "";
  let num2 = "";
  for (let i = 0; i < n; i += 2) {
    num1 += nums[i];
    num2 += nums[i + 1] ?? "";
  }

  return +num1 + +num2;
}

export {};
