function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  const left = new Array<number>(n).fill(-1);
  let stack: number[] = [];

  for (let i = 0; i < n; i++) {
    const h = heights[i];
    while (stack.length && heights[stack[stack.length - 1]] >= h) {
      stack.pop();
    }
    if (stack.length) {
      left[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  stack = [];
  const right = new Array<number>(n).fill(n);
  for (let i = n - 1; i >= 0; i--) {
    const h = heights[i];
    while (stack.length && heights[stack[stack.length - 1]] >= h) {
      stack.pop();
    }
    if (stack.length) {
      right[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, heights[i] * (right[i] - left[i] - 1));
  }

  return ans;
}

export { largestRectangleArea };
