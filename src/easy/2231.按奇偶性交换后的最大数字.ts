function largestInteger(num: number): number {
  const odd: number[] = [];
  const even: number[] = [];

  const nums: number[] = [];
  let x = num;
  while (x) {
    const y = x % 10;

    if (y % 2 === 0) {
      even.push(y);
    } else {
      odd.push(y);
    }

    nums.unshift(y);
    x = Math.floor(x / 10);
  }

  odd.sort((a, b) => a - b);
  even.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const y = nums[i];
    let z: number;
    if (y % 2 === 0) {
      z = even.pop()!;
    } else {
      z = odd.pop()!;
    }
    nums[i] = z;
  }

  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans = ans * 10 + nums[i];
  }

  return ans;
}

export { largestInteger };
