function mostCompetitive(nums: number[], k: number): number[] {
  const n = nums.length;

  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && n - i + stack.length > k && stack.at(-1)! > nums[i]) {
      stack.pop();
    }

    stack.push(nums[i]);
  }

  return stack.slice(0, k);
}

export { mostCompetitive };
