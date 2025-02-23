function lengthLongestPath(input: string): number {
  const n = input.length;
  let ans = 0;
  const stack: number[] = [];

  let p = 0;
  while (p < n) {
    let depth = 1;
    while (p < n && input[p] === "\t") {
      p++;
      depth++;
    }

    let isFile = false;
    let size = 0;
    while (p < n && input[p] !== "\n") {
      if (input[p] === ".") {
        isFile = true;
      }
      size++;
      p++;
    }

    p++;

    while (stack.length >= depth) {
      stack.pop();
    }

    if (stack.length) {
      size += stack[stack.length - 1] + 1;
    }

    if (isFile) {
      ans = Math.max(ans, size);
    } else {
      stack.push(size);
    }
  }

  return ans;
}

export { lengthLongestPath };
