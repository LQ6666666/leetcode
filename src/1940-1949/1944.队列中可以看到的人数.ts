function canSeePersonsCount(heights: number[]): number[] {
  const n = heights.length;
  const ans = new Array<number>(n).fill(0);
  // 单调递减
  const stack: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const h = heights[i];
    while (stack.length > 0 && h >= stack[stack.length - 1]) {
      stack.pop();
      ans[i]++;
    }
    if (stack.length) {
      ans[i]++;
    }
    stack.push(h);
  }
  return ans;
}

export {};
