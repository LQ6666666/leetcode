function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const ans = new Array<number>(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    const temperature = temperatures[i];
    while (stack.length !== 0 && temperature > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop()!;
      ans[index] = i - index;
    }
    stack.push(i);
  }

  return ans;
}

export { dailyTemperatures };
