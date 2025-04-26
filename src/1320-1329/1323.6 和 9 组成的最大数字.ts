function maximum69Number(num: number): number {
  const nums: number[] = [];
  let x = num;

  while (x > 0) {
    nums.push(x % 10);
    x = Math.floor(x / 10);
  }

  let count = 1;
  let ans = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    let y = nums[i];
    if (count > 0 && y === 6) {
      y = 9;
      count--;
    }
    ans = ans * 10 + y;
  }

  return ans;
}

export { maximum69Number };
