function findTheArrayConcVal(nums: number[]): number {
  const n = nums.length;
  const half = n >> 1;

  let ans = 0;
  for (let i = 0; i < half; i++) {
    const end = nums[n - i - 1];

    // end 的位数
    let count = 0;
    let x = end;
    while (x > 0) {
      count++;
      x = Math.floor(x / 10);
    }

    ans += nums[i] * 10 ** count + end;
  }

  if (n % 2 !== 0) {
    ans += nums[half];
  }

  return ans;
}

export { findTheArrayConcVal };
