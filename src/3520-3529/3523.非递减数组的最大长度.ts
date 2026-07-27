function maximumPossibleSize(nums: number[]): number {
  const n = nums.length;
  const stack: number[] = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      stack.pop();
    }
    stack.push(i);
  }

  return stack.length;
}

export {};
