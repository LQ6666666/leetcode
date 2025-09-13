function smallestDivisor(nums: number[], threshold: number): number {
  const n = nums.length;
  let left = 1;
  let right = Math.max(...nums);

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    const result = helper(middle);
    if (result > threshold) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;

  function helper(divisor: number) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const num = nums[i];
      sum += Math.ceil(num / divisor);
    }
    return sum;
  }
}

export { smallestDivisor };
