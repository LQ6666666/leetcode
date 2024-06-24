function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array<number>(n).fill(-1);
  const stack: number[] = [];

  for (let i = 0; i < n * 2 - 1; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      ans[stack[stack.length - 1]] = nums[i % n];
      stack.pop();
    }
    stack.push(i % n);
  }

  return ans;
}

export { nextGreaterElements };
