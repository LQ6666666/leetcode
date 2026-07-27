function maxProduct(nums: number[]): number {
  const n = nums.length;

  let first = 0;
  let second = 0;

  for (let i = 0; i < n; i++) {
    const num = nums[i];

    if (num > first) {
      second = first;
      first = num;
    } else if (num > second) {
      second = num;
    }
  }

  return (first - 1) * (second - 1);
}

export {};
