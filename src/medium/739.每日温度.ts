function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const stack: number[] = [];

  const ans = new Array<number>(n).fill(0);
  for (let i = 0; i < n; i++) {
    const temperature = temperatures[i];
    while (stack.length !== 0 && temperatures[stack.at(-1)!] < temperature) {
      const prevIndex = stack.pop()!;
      ans[prevIndex] = i - prevIndex;
    }

    stack.push(i);
  }

  return ans;
}

export { dailyTemperatures };
