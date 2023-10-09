function splitNum$(num: number): number {
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

function splitNum(num: number): number {
  const nums: number[] = [];
  let x = num;
  while (x > 0) {
    nums.push(x % 10);
    x = Math.floor(x / 10);
  }
  nums.sort((a, b) => a - b);

  let n = nums.length;
  const num1: number[] = [];
  const num2: number[] = [];

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (i % 2 === 0) {
      num1.push(num);
    } else {
      num2.push(num);
    }
  }

  return toNum(num1) + toNum(num2);
}

function toNum(nums: number[]): number {
  const n = nums.length;

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += nums[i] * 10 ** (n - i - 1);
  }
  return ans;
}

export {};
